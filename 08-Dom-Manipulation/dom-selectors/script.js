// Art supplies logic
const favIcon = document.querySelectorAll(".fav-icon");

favIcon.forEach(icon => {
  icon.addEventListener("click", (event) => {
    event.target.classList.toggle('filled');
    event.target.innerHTML = "&#10084;";
  })
})
