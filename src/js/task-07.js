const input = document.querySelector("input");
const text = document.querySelector("#text");
console.log(input);
console.log(text);
input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  console.log(`${input.value}px`);
});
