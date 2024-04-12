// for (let i = 2; i <=10; i=i+2) {
//     console.log(i);
// }

//Print table of any number
// let n = prompt("enter number");
// n = parseInt(n);
// for (i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

//Nested loop
// for (i = 1; i <= 3; i++) {
//   console.log(`Outer loop ${i}`);
//   for (j = 1; j <= 3; j++) {
//     console.log(`Inner loop ${j}`);
//   }
// }

// let fruits = ["Apple", "Mango", "Banana", "Litchi"];
// for (let index = 0; index < fruits.length; index++) {
//   console.log(index, fruits[index]);
// }

//Nested array

let student=[["Ravi",100],["Avi",90],["Raj",80]];
for (let index = 0; index < student.length; index++) {
    console.log(student[index]);
    console.log("below start inner loop")
    for (let j = 0; j < student[index].length; j++) {
        
        console.log(student[index][j]);
    }
}