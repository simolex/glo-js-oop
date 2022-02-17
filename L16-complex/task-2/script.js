"use strict";

function getResult(x, y) {
  let result;

  result = [...(x ** y + "")].reduce((sum, digit) => +digit + sum, 0);

  return result;
}

console.log(getResult(4, 8));
