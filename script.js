let buttonEnter = document.getElementById("btn-enter");
let buttonClear=document.getElementById("btn-clear");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let button =document.createElement("button");

function inputLength () {
  return input.value.length
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  li.addEventListener("click", function() {
    let finished = this.classList.toggle("done");
    let removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");

  if (finished) {
      removeButton.appendChild(document.createTextNode("remove?"));
      removeButton.classList = "deleteButton";
      li.appendChild(removeButton);

      removeButton.addEventListener("click", function() {
        this.parentElement.remove();
      });
    } else {
      this.getElementsByClassName("deleteButton")[0].remove();
    }
  })
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
