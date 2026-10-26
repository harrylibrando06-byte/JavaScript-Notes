const happyBtn = document.getElementById("happy-btn");
const sadBtn = document.getElementById("sad-btn");
const angryBtn = document.getElementById("angry-btn");
const suprisedBtn = document.getElementById("surprised-btn");

const updateCount = (btns) => {
    const countEl = btns.querySelector(".count");
    let currCount = +countEl.textContent.split("/")[0];
    
    if (currCount === 10) {
        return;
    }
    currCount++;
    
    countEl.textContent = `${currCount}/10`;
};

const buttons = document.querySelectorAll(".emoji-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        updateCount(btn);
    })
});