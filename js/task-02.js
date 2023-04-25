const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  list.prepend(liItem);
});
