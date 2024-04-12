let url = "https://api.potterdb.com/";
let urlCard = "https://fakerapi.it/api/v1/credit_cards?_quantity=2";

let h2 = document.querySelector("#hdrPotter");
let btn = document.querySelector("#btnPotter");
let para = document.querySelector("p");

let h2Card = document.querySelector("#hdrCard");
let btnCard = document.querySelector("#btnCard");
let paraCard1 = document.querySelector("#card1");
let paraCard2 = document.querySelector("#card2");
let paraCard3 = document.querySelector("#card3");
let paraCard4 = document.querySelector("#card4");

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      console.log("button was clicked");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      //   console.log("Data:=",data.message);
      para.innerText = data.message;
      para.style.color = "red";
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

btnCard.addEventListener("click", () => {
  fetch(urlCard)
    .then((response) => {
      console.log("button was clicked");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("Data:=", data);
      console.log("Card Type:=", data.data[0].type);
      console.log("Card Number:=", data.data[0].number);
      paraCard1.innerText = `Card Type: ${data.data[0].type}`;
      paraCard1.style.color="red";

      paraCard2.innerText =`Card Number: ${data.data[0].number}`;
      paraCard2.style.color="red";

      paraCard3.innerText = `Card Exp: ${data.data[0].expiration}`;
      paraCard3.style.color="red";

      paraCard4.innerText = `Card Owner: ${data.data[0].owner}`;
      paraCard4.style.color="red";
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});
