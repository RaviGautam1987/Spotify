// console.log("Hello");

// setTimeout(() => {
//   console.log("Java Script Code");
// }, 4000);

// console.log("Welcome to");

// let sqr = (n) => {
//   return n * n;
// };
// console.log(sqr(4));

// let id = setInterval(() => {
//   console.log("Hello World!");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);




const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr)
    {
        total+=number;
    }
    return total/arr.length;
};
let arr=[1,2,3,4,5,6];
console.log(arrayAverage(arr));

