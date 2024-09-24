const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

let cardCount = 0;

addBtn.addEventListener("click", () => {
  const cardContainer = document.getElementById("card-container");
  cardCount++;

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = `Card ${cardCount}`;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = `This is Description of the card.`;

  const cardBtn = document.createElement("button");
  cardBtn.textContent = `Click Me`;

  cardBtn.classList.add("card-button");

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardDescription);
  newCard.appendChild(cardBtn);

  cardContainer.appendChild(newCard);
});

deleteBtn.addEventListener("click", () => {
  const cardContainer = document.getElementById("card-container");
  if (cardCount > 0) {
    cardContainer.removeChild(cardContainer.lastElementChild);
    cardCount--;
  } else {
    alert("No don't left of delete");
  }
});
