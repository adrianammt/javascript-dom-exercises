const inputName = document.querySelector("input");
const text = document.querySelector("h1");
const originalText = text.textContent;

inputName.addEventListener("change", () => {
  console.log(inputName.value);
  text.textContent = `${originalText} ${inputName.value}`;
});

//Another way to solve this would be to overwrite the text so inside the function: text.textContent = `"Hello World" ${inputName.value}`

//If you change input for "change", then you see what you type in, as you type in.
