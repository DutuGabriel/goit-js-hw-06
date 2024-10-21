const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");

  listEl.innerText = ingredient;

  listEl.classList.add("item");

  ingredientsList.append(listEl);
});
