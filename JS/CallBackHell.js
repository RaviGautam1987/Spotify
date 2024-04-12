let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000).then(() => {
  console.log("red color completed");
  return changeColor("orange", 2000);
})
.then(()=>{
    console.log("orange color completed");
    return changeColor("green", 2000);
})
.then(()=>{
    console.log("green color completed");
})
.catch(()=>{
    console.log("weak connection");
})