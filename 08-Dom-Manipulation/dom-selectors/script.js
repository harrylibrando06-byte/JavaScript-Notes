const buttons = document.querySelectorAll(".fav-icon");

const btnToggle = (btn) => {
    const filled = btn.classList.toggle("filled");

    if (filled) {
        btn.innerHTML = "&#10084;";
    } else {
        btn.innerHTML = "&#9825";
    }
};

buttons.forEach((btn) => {
    btn.addEventListener("click", () => btnToggle(btn))
    console.log("success")
});


const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];


const instrumentsContainer = document.querySelector(".instruments-container");
const selectInstrument = document.querySelector("select");
let instrumentDocs = "";

instrumentsArr.forEach(instrument => {
     instrumentDocs += 
    `
    <div class="card-container">
      <div class="card">
          <h2>${instrument.instrument}</h2>
          <p>$${instrument.price}</p>
      </div>  
    </div>  
    `;
});

instrumentsContainer.innerHTML += instrumentDocs;


const instrFunc = (instrCtgr) => {
  const instrument = 
    instrCtgr === "all" ? instrumentsArr : 
    instrumentsArr.filter(({category}) => category === instrCtgr);
  
  let intrHtml = "";
  
  instrument.forEach(item => {
    intrHtml += `
      <div class="card">
        <h2>${item.instrument}</h2>
        <p>$${item.price}</p>
      </div> 
    `;
  });
  
  instrumentsContainer.innerHTML = intrHtml;
};

selectInstrument.addEventListener("change", () => {
  instrFunc(selectInstrument.value); 
});

/* Real tim Character count */
const textArea = document.getElementById("textArea");
const charCount = document.querySelector(".char-count");
const timeP = document.querySelector(".timeP");

textArea.addEventListener("input", (event) => {
  // console.log("hatdog")
  if (event.target.value.length > 50) {
    timeP.style.color = "red";
    event.target.value = textArea.value.slice(0, 50);
  } else if (event.target.value.length === 50) {
    timeP.style.color = "red";
  } else {
    timeP.style.color = "black";
  }
  charCount.innerHTML = event.target.value.length;
});

// lightBox viewer


