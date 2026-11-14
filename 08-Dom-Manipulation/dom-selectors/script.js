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

// const cardObj = [
//     {instrument: "Flute", price: 500},
//     {instrument: "Flute", price: 500},
//     {instrument: "Flute", price: 500}
// ]

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

let blankHtml = "";

const instrumentsContainer = document.querySelector(".instruments-container");

instrumentsArr.forEach(card => {
     blankHtml += 
    `
    <div class="card-container">
      <div class="card">
        <h2>${card.instrument}</h2>
        <p>$${card.price}</p>
      </div>  
    </div>  
    `
})
instrumentsContainer.innerHTML += blankHtml;

