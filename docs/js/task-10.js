function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.insertAdjacentElement("beforeend", box);
    box.style.width = `${30 + i + 10}px`;
    box.style.height = `${30 + i + 10}px`;
  }
};

const destroyBoxes = () => {
  document.querySelector("#boxes").innerHTML = "";
};

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Te rog sa introduci un numar intre 1 si 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
