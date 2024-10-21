let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

const updateCounter = () => {
  value.innerText = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 2;
  updateCounter();
});
