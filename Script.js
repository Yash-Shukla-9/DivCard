let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];
// Even -> Red
// Odd -> Blue

// function isodd(X) {
//   return X % 2;
// }

// const store = numbers.filter(isodd).map((el) => {
//   console.log(el);
//   return el;
// });

// const div = document.querySelector(".Box");

// const neww = document.createElement("div");

// for (i = 0; i < store.length; i++) {
//   neww.innerHTML = store;
//   neww.style.backgroundColor = "blue";
//   div.appendChild(neww);
// }

const cardContainer = document.querySelector(".Box");

numbers.forEach((number) => {
  const card = document.createElement("div");
  card.classList.add("card");

  if (number % 2 == 0) {
    card.classList.add("red");
    console.log(number);
  } else {
    card.classList.add("blue");
  }

  card.innerText = number;

  cardContainer.appendChild(card);
});
