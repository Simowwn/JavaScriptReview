let a = 5;
let b = 1;

function division(a, b) {
  if (b === 0) {
    throw new RangeError("Error the second number must not be a zero");
  }
  return a / b;
}

console.log(division(a, b));

// Write a program that, in a loop, divides the number 1000 by successive elements of the numbers
// array, displaying the result of each division. To divide the numbers, use the function from the previous task.
// Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught,
// the program should print an appropriate message (taken from the exception) and continue its operation
// (division by successive elements of the array).
let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++) {
  try {
    let result = division(1000, numbers[i]);
    console.log(`1000 / ${numbers[i]} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
