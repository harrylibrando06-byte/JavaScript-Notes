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
})