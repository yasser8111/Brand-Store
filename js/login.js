const authContainer = document.querySelector(".auth-container");
const switchForms = document.querySelectorAll(".switch-form");

switchForms.forEach((switchForm) => {
  switchForm.addEventListener("click", () => {
    authContainer.classList.toggle("flipped");
  });
});
