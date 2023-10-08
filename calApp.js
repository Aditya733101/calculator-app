let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = '';

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.innerText == '=') {
      string = String(eval(string));
      inputBox.value = string;
    } else if (event.target.innerText == 'AC') {
      string = "";
      inputBox.value = string;
    } else if (event.target.innerText == 'DEL') {
      // Corrected "DEL" to uppercase
      string = string.slice(0, -1);
    //   string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      string += event.target.innerText;
      inputBox.value = string;
    }
  });
});
