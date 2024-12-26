const spanA = document.querySelector(".span1");
const spanB = document.querySelector(".span2");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

let num1 = 10;
let num2 = 0;

btn1.addEventListener("click", () => {
  if (num1 > 0) {
    spanA.textContent = --num1;
    spanB.textContent = ++num2;
  }
});

btn2.addEventListener("click", () => {
  if (num2 > 0) {
    spanB.textContent = --num2;
    spanA.textContent = ++num1;
  }
});
