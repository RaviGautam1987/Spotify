// //Access object by ID
// let imgObj = document.getElementById("mainImg");
// console.log(imgObj);

// // Access object by ClassName
// let smallImages = document.getElementsByClassName("oldImg");
// console.log(smallImages);

// for (let index = 0; index < smallImages.length; index++) {
//     smallImages[index].src="Assets/spiderman_img.png";      //Applying Spiderman image to all images
//     console.dir(smallImages[index]);
// }

let p =document.createElement('p');
p.innerText="Hey I'm red!";
p.style.color='red';

let body=document.querySelector('body');
body.appendChild(p);


let h3 =document.createElement('h3');
h3.innerText="Hey I'm blue h3!";
h3.style.color='blue';

// let body=document.querySelector('body');
p.appendChild(h3);


let div=document.createElement('div');
let h1=document.createElement('h1');
let para=document.createElement('p');

h1.innerText='Im in a div';
para.innerText='Me too';

div.append(h1);
div.append(para);
// div.style.border='black';
// div.style.backgroundColor='pink';

div.classList.add("box");
document.querySelector("body").append(div);


let btn=document.createElement("button");
let input=document.createElement("input");
btn.innerText="Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);


// input.placeholder="username"; we can also right this
input.setAttribute("placeholder","username");
btn.setAttribute('id','btn')


let newBtn=document.querySelector("#btn");
newBtn.classList.add('buttonColor');

let h2=document.createElement('h2');
h2.innerText="DOM Practice";
h2.classList.add("h2");
document.querySelector("body").append(h2);

let pp=document.createElement('p');
pp.innerHTML="Apna college <b>delta</b> practice";
document.querySelector("body").append(pp);