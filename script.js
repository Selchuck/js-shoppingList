let button = document.getElementById("btn-enter");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let btn=document.createElement("button");

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


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
