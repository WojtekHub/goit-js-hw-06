"use strict";
const input = document.querySelector("#validation-input");
const neededLength = input.dataset.length;
input.addEventListener("blur", () => {
  if (input.value.length === Number.parseInt(neededLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
