// Exercise 2: Write three functions with the names add, sub, and mult, which will take two numerical arguments.
// The functions are to check if the given arguments are integers (use Number.isInteger).
// If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively.
// The functions are to be declared using a function statement.

let num1 = 10;
let num2 = 5;

// if (Number.isInteger(num1) && Number.isInteger(num2)) {
//   console.log(num1 + num2); // addition
//   console.log(num1 - num2); // subtraction
//   console.log(num1 * num2); // multiplication
// } else {
//   console.log("NaN");
// }

function add(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  } else {
    return NaN;
  }
}
function sub(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 - num2;
  } else {
    return NaN;
  }
}
function mult(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 * num2;
  } else {
    return NaN;
  }
}
let action = (callback, a, b) => callback(a, b);

const addd = (num1, num2) => {
  return Number.isInteger(num1) && Number.isInteger(num2) ? num1 + num2 : NaN;
};

// console.log(addd(num1, num2));

const subb = (num1, num2) => {
  return Number.isInteger(num1) && Number.isInteger(num2) ? num1 - num2 : NaN;
};
// console.log(subb(num1, num2));

const multt = (num1, num2) => {
  return Number.isInteger(num1) && Number.isInteger(num2) ? num1 * num2 : NaN;
};
// console.log(multt(num1, num2));

console.log(action(addd, num1, num2));

// CALLBACK IS OVERKILL IN THIS EXAAMPLE

// exercise 5 tomorrow
