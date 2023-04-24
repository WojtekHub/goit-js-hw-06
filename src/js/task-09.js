const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
//console.log(span);
//console.log(button);
console.log(body);

button.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  console.log(randomColor);
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
