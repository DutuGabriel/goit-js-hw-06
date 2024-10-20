function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
};

const destroyBoxes = () => {
  document.querySelector("#boxes").innerHTML = "";
};

const createBtn = document.querySelector("[data-create");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener(click, () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Te rog sa introduci un numaar intre 1 si 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
