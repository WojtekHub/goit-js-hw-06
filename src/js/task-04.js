let counterValue = 0;

const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const valueClick = document.querySelector("#value");

const clickButtonIncrement = () => {
  valueClick.innerHTML = counterValue += 1;
  console.log(value);
};
const clickButtonDecrement = () => {
  valueClick.innerHTML = counterValue -= 1;
  console.log(value);
};

buttonIncrement.addEventListener("click", clickButtonIncrement);
buttonDecrement.addEventListener("click", clickButtonDecrement);
