const buttonElement = document.querySelector(".show-hide-button");
const boxElement = document.querySelector(".box");

/*buttonElement.addEventListener("click", () => {
  const hide = boxElement.classList.toggle("hidden");
  if (hide) {
    buttonElement.textContent = "Show";
  } else {
    buttonElement.textContent = "Hide";
  }
});*/

//other way is to use if buttonElement.textContent === "Show" then Hide and else show

buttonElement.addEventListener("click", () => {
  boxElement.classList.toggle("hidden");
  buttonElement.textContent = "Show";
  if (buttonElement.textContent === "Show") {
    buttonElement.textContent = "Hide";
  } else {
    buttonElement.textContent = "Show";
  }
});
