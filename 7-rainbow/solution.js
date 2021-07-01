const button = document.querySelector(".shine-button");
const liColorList = document.querySelectorAll("li");

button.addEventListener("click", () => {
  for (let i = 0; i < liColorList.length; i++) {
    const liColor = liColorList[i];
    liColor.style.color = liColor.textContent;
  }
});

//Another way would be to not have line 6 and do  liColorylist[i].style.color = liColorylist[i].textContent
