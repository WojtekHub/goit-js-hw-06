const categoryItems = document.querySelectorAll("li.item");
let liNumber;
for (let i = 0; i < categoryItems.length; i += 1) {
  liNumber = i + 1;
}
console.log(`Number of categories: ${liNumber}`);

const categoryItems2 = document.querySelectorAll("li.item");
for (let element of categoryItems2) {
  const h2Content = element.querySelector("h2");
  const ilCount = element.querySelectorAll("li");
  console.log(`Category: ${h2Content.textContent}`);
  console.log(`Elements: ${ilCount.length}`);
}
