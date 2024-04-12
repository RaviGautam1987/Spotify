let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");
  item.appendChild(btnDelete);

  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  console.dir(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  } else {
    console.log("don't delete");
  }
});

// let btnsDelete = document.querySelectorAll(".delete");
// for (delBtn of btnsDelete) {
//   delBtn.addEventListener("click", function () {
//     console.log("Item deleted");
//     let parent = this.parentElement;
//     console.log(parent);
//     parent.remove();
//   });
// }
