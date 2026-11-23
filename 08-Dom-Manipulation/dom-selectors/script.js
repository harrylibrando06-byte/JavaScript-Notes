// Art supplies logic
const favIcon = document.querySelectorAll(".fav-icon");

favIcon.forEach(icon => {
  icon.addEventListener("click", (event) => {
    event.target.classList.toggle('filled'); 
    event.target.innerHTML = "&#10084;";
  })
})

// Students instruments
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
const select = document.querySelector("select");

instrumentsArr.forEach(instrument => {
  const instrumentCard = `
    <div class="card">
      <h1>${instrument.instrument}</h1>
      <p>$${instrument.price}</p>
    </div>
  `;

  instrumentsContainer.innerHTML += instrumentCard;
});

const instrCardFunc = (instrCtgr) => {
  let instrHtml = ""; 
  const instrument = 
    instrCtgr === "all" ? instrumentsArr : 
    instrumentsArr.filter(item => item === instrCtgr.category); 
  
  instrumentsContainer.innerHTML = instrument.forEach(item => {
     `<div class="card">
      <h1>${item.instrument}</h1>
      <p>$${item.price}</p>
    </div>`
  });
}; 

select.addEventListener("change", (event) => {
  instrCardFunc(select.value);
});

// Real time character counter
const textArea = document.querySelector("#textArea");
const charCount = document.querySelector(".char-count");
const timeP = document.querySelector(".timeP");

textArea.addEventListener("input", (event) => {
  if (textArea.value.length > 50) {
    timeP.style.color = "red";
    textArea.value = event.target.value.slice(0, 50);
  }

  charCount.innerHTML = event.target.value.length;
});

// light box
const galleryItem = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector("#closeBtn");

galleryItem.forEach(item => {
  item.addEventListener("click", (event) => {
    lightBox.style.display = "flex";
    lightBoxImg.src = event.target.src.replace("-thumbnail", "");
  });
});

lightBox.addEventListener("click", (event) => {
  lightBox.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
})
