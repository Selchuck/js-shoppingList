let buttonEnter = document.getElementById("btn-enter");
let buttonClear=document.getElementById("btn-clear");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength () {
  return input.value.length
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
   if (!inputLength == "") {
    createListElement();
  }
}

function addListAfterKeypress(event) {
   if (!inputLength =="" && event.keyCode === 13) {
    createListElement();
  }
}

function clearList() {
    ul.innerHTML = "";
}

buttonClear.addEventListener("click", clearList);
buttonEnter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
