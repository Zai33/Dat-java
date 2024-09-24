const toggleCheckbox = document.getElementById("toggle-checkbox");
const body = document.body;

toggleCheckbox.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  if (toggleCheckbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
    