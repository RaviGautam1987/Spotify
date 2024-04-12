// let btn = document.querySelector("button");
// let inp = document.getElementById("#abc");

// btn.addEventListener("mouseout", (event) => {
//   alert("mouse is over on button");
// });

// inp.addEventListener("keypress", () => {
//   alert("key is pressed.");
// });

// inp.addEventListener("scroll", hanler);

// function hanler(event) {
//   console.log("scroll is working");
// }
// inp.style.overflow = "auto";
// inp.style.height = "100px";

// let btn = document.createElement("button");
// btn.innerText="Click me!"
// document.querySelector("body").append(btn);
// btn.addEventListener("click", function () {
//   btn.style.color = "Red";
// });

 let inp = document.querySelector("input");
 inp.addEventListener("keyup",function(event){
    let h2=document.querySelector("h2");
    h2.innerText=inp.value.replace(/[^a-zA-Z ]/g, '');
    console.log("key was up");
 });