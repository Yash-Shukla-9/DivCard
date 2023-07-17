let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];
// Even -> Red
// Odd -> Blue

function isodd(X) {
  return X % 2;
}

// const store = numbers.filter(isodd? ).map((el) => {
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

// const cardContainer = document.querySelector("#Box");

const cardContainer = document.getElementById("Box");

numbers.forEach((number) => {
  const card = document.createElement("div"); // <div> </div>
  card.classList.add("card"); //  <div class ="card"></div>
  // 35-line will be like this or just above line   card.className= "card"

  if (number % 2 == 0) {
    // 10 % 2, 5%2
    card.classList.add("red");
    card.style.height = "100px";
    card.style.width = "100px";
  } else {
    card.classList.add("blue");
    card.style.height = "100px";
    card.style.width = "100px";
  }
  card.innerText = number;

  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";

  cardContainer.appendChild(card);

  card.addEventListener("mouseover", function (e) {
    const ss = e.target.innerText;
    alert(ss);
  });
});
