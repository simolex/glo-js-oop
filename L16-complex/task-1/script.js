"use strict";

const fieldA = document.getElementById("a");
const fieldB = document.getElementById("b");
const fieldResult = document.getElementById("res");
const buttonMult = document.getElementById("mult");
const buttonSum = document.getElementById("sum");

const calculator = {
  a: 0,
  b: 0,
  sum: function () {
    this.show(this.a + this.b);
  },
  mult: function () {
    this.show(this.a * this.b);
  },
  show: function (result) {
    fieldResult.value = result;
  },
};

const calc = Object.create(calculator);

fieldA.addEventListener("input", (e) => {
  calc.a = +e.target.value;
});

fieldB.addEventListener("input", (e) => {
  calc.b = +e.target.value;
});

buttonMult.addEventListener("click", () => calc.mult());
buttonSum.addEventListener("click", () => calc.sum());
