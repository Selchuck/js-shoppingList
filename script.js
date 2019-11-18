let button = document.getElementById("btn-enter");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
  if (!input.value.length == "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})


input.addEventListener("keypress", function(event) {
  if (!input.value.length =="" && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})
