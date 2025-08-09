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
// Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times,
// in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < nums.length; i++) {
//   setInterval(() => {
//     console.log(nums[i]);
//   }, 2000);
// }

// setTimeout(() => {
//   clearInterval();
// }, 2000 * nums.length);

// let count = 1;

// let intervalID = setInterval(() => {
//   console.log(count);
//   count++;

//   if (count > 10) {
//     clearInterval(intervalID);
//   }
// }, 2000);

// So each element of the sequence (except the first two) is the sum of the previous two.
// For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression
//  (store an anonymous function in a variable).
// Exercise 6: Write a function that will return the nth Fibonacci number.

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

let fibbRec = function (n) {
  let retVal = 0;
  if (n != 0) {
    if (n === 1) {
      retVal = 1;
    } else {
      retVal = fibbRec(n - 1) + fibbRec(n - 2);
    }
  }
  return retVal;
};

function fibbi(n) {
  if (n <= 1) return n;
  return fibbi(n - 1) + fibbi(n - 2);
}

function printFibbi(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(fibbi(i));
  }
}
printFibbi(6); // Output: 0, 1, 1, 2, 3, 5, 8

function fibbiItter(n) {
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a; //0 , 1  1  2
    a = b; //1 , 1  2  3
    b += c; //1 , 2  3  5
  }
  return b;
}
