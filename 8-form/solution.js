const data = []; //This creates an empty array

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // This prevents the default form behaviour

  //From here on I am getting the values typed in by the user
  const name = formElement.name.value;
  const age = formElement.age.value;
  const checkBox = formElement.married.checked;
  const hobbies = formElement.hobbies.value;

  //This creates an Object to push into the empty data array
  const user = {
    name: name, //I could remove the first part name: because they are the same naming
    age: age,
    married: checkBox,
    Hobbies: hobbies,
  };
  //I could also declare the const inside the object like name: formElement.name.value; and it would work aswell.

  //This pushes the user object data into the array
  data.push(user);
  console.log(data);
  //This resets the form.
  formElement.reset();
});
