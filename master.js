// let cards = document.querySelectorAll(".card"),
//   cardOne,
//   cardTow,
//   disableClick = false,
//   matchedCards = 0;
// function flip(e) {
//   let clickedCard = e.target;
//   if (clickedCard !== cardOne && !disableClick) {
//     clickedCard.classList.add("flip");
//     if (!cardOne) {
//       return (cardOne = clickedCard);
//     }
//     cardTow = clickedCard;
//     disableClick = true;
//     let cardOneIcon = cardOne.querySelector(".view-back i").className;
//     let cardTowIcon = cardTow.querySelector(".view-back i").className;
//     matchedCard(cardOneIcon, cardTowIcon);
//   }
// }
// function matchedCard(crd1, crd2) {
//   if (crd1 === crd2) {
//     matchedCards++;
//     if (matchedCards === 8) {
//       return setTimeout(() => {
//         shuffleAll();
//       }, 1000);
//     }
//     cardOne.removeEventListener("click", flip);
//     cardTow.removeEventListener("click", flip);
//     cardTow = cardOne = "";
//     return (disableClick = false);
//   }
//   setTimeout(() => {
//     cardOne.classList.add("shake");
//     cardTow.classList.add("shake");
//   }, 400);
//   setTimeout(() => {
//     cardOne.classList.remove("flip", "shake");
//     cardTow.classList.remove("flip", "shake");
//     cardTow = cardOne = "";
//     disableClick = false;
//   }, 1200);
// }
// shuffleAll();
// function shuffleAll() {
//   matchedCards = 0;
//   cardTow = cardOne = "";
//   disableClick = false;
//   let arr = [
//     "bolt",
//     "birthday-cake",
//     "bank",
//     "ambulance",
//     "balance-scale",
//     "bug",
//     "bomb",
//     "anchor",
//     "bolt",
//     "birthday-cake",
//     "bank",
//     "ambulance",
//     "balance-scale",
//     "bug",
//     "bomb",
//     "anchor",
//   ];
//   arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
//   cards.forEach((card, index) => {
//     card.classList.remove("flip");
//     card.addEventListener("click", flip);
//     let cardiCon = card.querySelector(".view-back i");
//     cardiCon.className = `fa fa-${arr[index]} fa-2x`;
//   });
// }
// cards.forEach((card) => {
//   card.addEventListener("click", flip);
// });
// // let arr = ["bolt","birthday-cake","bank","ambulance","balance-scale","bug","bomb","anchor","bolt","birthday-cake","bank","ambulance","balance-scale","bug","bomb","anchor"]
// // arr.sort(() => Math.random() > 0.5 ? 1 : -1)
// // console.log(arr)
// // console.log(Math.random())

// let cards = document.querySelectorAll(".card");
// let cardOne,
//   cardtwo,
//   disableClick = false,
//   matchedCards = 0;
// function filpCard(e) {
//   let clickedCard = e.target;
//   if (clickedCard !== cardOne && !disableClick) {
//     clickedCard.classList.add("flip");
//     if (!cardOne) {
//       return (cardOne = clickedCard);
//     }
//     cardtwo = clickedCard;
//     disableClick = true;
//     let cardOneIcon = cardOne.querySelector(".view-back i").className;
//     let cardtwoIcon = cardtwo.querySelector(".view-back i").className;
//     matchedCard(cardOneIcon, cardtwoIcon);
//   }
// }
// shuffleCards();
// function matchedCard(crd1, crd2) {
//   if (crd1 === crd2) {
//     matchedCards++;
//     if (matchedCards === 8) {
//       return setTimeout(() => {
//         shuffleCards();
//       }, 1000);
//     }
//     cardOne.removeEventListener("click", filpCard);
//     cardtwo.removeEventListener("click", filpCard);
//     cardOne = cardtwo = "";
//     return (disableClick = false);
//   }
//   setTimeout(() => {
//     cardOne.classList.add("shake");
//     cardtwo.classList.add("shake");
//   }, 400);
//   setTimeout(() => {
//     cardOne.classList.remove("flip", "shake");
//     cardtwo.classList.remove("flip", "shake");
//     cardOne = cardtwo = "";
//     disableClick = false;
//   }, 1200);
// }
// function shuffleCards() {
//   let arr = [
//     "bolt",
//     "birthday-cake",
//     "bank",
//     "ambulance",
//     "balance-scale",
//     "bug",
//     "bomb",
//     "anchor",
//     "bolt",
//     "birthday-cake",
//     "bank",
//     "ambulance",
//     "balance-scale",
//     "bug",
//     "bomb",
//     "anchor",
//   ];
//   arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
//   cards.forEach((card, index) => {
//     card.classList.remove("flip");
//     card.addEventListener("click", filpCard);
//     let cardIcon = card.querySelector(".view-back i");
//     cardIcon.className = `fa fa-${arr[index]} fa-2x`;
//   });
// }
// cards.forEach((card) => {
//   card.addEventListener("click", filpCard);
// });
let cards = document.querySelectorAll(".card"),
  cardOne,
  cardTow,
  disableClick = false,
  matchedCars = 0;
function filpCard(e) {
  let clickedCard = e.target;
  if (cardOne !== clickedCard && !disableClick) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTow = clickedCard;
    disableClick = true;
    let cardOneIcon = cardOne.querySelector(".view-back i").className;
    let cardTowIcon = cardTow.querySelector(".view-back i").className;
    matchedCArds(cardOneIcon, cardTowIcon);
  }
}
shulleCards();
function matchedCArds(crd1, crd2) {
  if (crd1 === crd2) {
    matchedCars++;
    if (matchedCars === 8) {
      return setTimeout(() => {
        shulleCards();
      }, 1000);
    }
    cardOne.removeEventListener("click", filpCard);
    cardTow.removeEventListener("click", filpCard);
    cardOne = cardTow = "";
    return (disableClick = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTow.classList.add("shake");
  }, 400);
  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTow.classList.remove("shake", "flip");
    cardOne = cardTow = "";
    disableClick = false;
  }, 1200);
}
function shulleCards() {
  let arr = [
    "birthday-cake",
    "bolt",
    "bank",
    "ambulance",
    "balance-scale",
    "bug",
    "bomb",
    "anchor",
    "bolt",
    "birthday-cake",
    "bank",
    "ambulance",
    "balance-scale",
    "bug",
    "bomb",
    "anchor",
  ];
  arr.sort(() => (Math.random() < 0.5 ? -1 : 1));
  console.log(arr);
  cards.forEach((card, index) => {
    let cardIcon = card.querySelector(".view-back i");
    cardIcon.className = `fa fa-${arr[index]} fa-2x`;
    card.classList.remove("flip");
    card.addEventListener("click", filpCard);
    disableClick = false;
  });
}
cards.forEach((card) => {
  card.addEventListener("click", filpCard);
});
