
const toggleMode = document.getElementById("toggleMode");


function toggleClicked() {
  if (this.checked) {
    document.body.classList.remove("dark_mode");
    document.body.classList.add("light_mode");
  } else {
    document.body.classList.add("dark_mode");
    document.body.classList.remove("light_mode");
  }
}

toggleMode.addEventListener("click", toggleClicked);
