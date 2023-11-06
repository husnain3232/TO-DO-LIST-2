var inputBox = document.getElementById("input box");
var listcontainer = document.getElementById("list-container");
function AddTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

    }
    inputbox.vlaue = "";

}