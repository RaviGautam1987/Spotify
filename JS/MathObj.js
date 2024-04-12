// let random=Math.floor(Math.random()*100)+1;
// console.log(random);

let num = prompt("Enter any number");
let random = Math.floor(Math.random() * num) + 1;
let random1 = Math.floor(Math.random() * num) + 6;

let guess = prompt("Guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (random == guess) {
    console.log("Congrat's your number is matched");
    alert("Congrat's your number is matched. You randowm was " + random + "");
    break;
  } else if (guess < random) {
    guess = prompt("Your number is too small, Please try again!");
  } else if (guess > random) {
    guess=prompt("Your number is too big, Please try again!");
  }
}
