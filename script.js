let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", () => {
  if (inputField.value == "") {
  } else {
    var div = document.createElement("div");
    var paragraph = document.createElement("p");
    var removeButton = document.createElement("a");

    toDoContainer.appendChild(div);
    div.appendChild(paragraph);
    div.appendChild(removeButton);

    div.setAttribute("class", "texts-container");
    paragraph.setAttribute("class", "paragraph");
    removeButton.setAttribute("class", "button-remove");
    removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    paragraph.innerHTML = inputField.value;
    inputField.value = "";

    removeButton.addEventListener("click", () => {
      div.remove();
    });
  }
});
