// Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console,
// but in steps of 10; so 100, 90, 80... etc.

for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

// Write a program that first writes out all these numbers on the console, then only those that are even
// (hint: the remainder of dividing an even number by 2 is equal to 0),
// then only those that are larger than 10 and at the same time smaller than 60.
console.log("\nExercise 3");
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log("All numbers:");
for (number of numbers) {
  console.log(number);
}

console.log("\nEven numbers:");
for (number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

console.log("\nNumbers larger than 10 and smaller than 60:");
for (number of numbers) {
  if (number > 10 && number < 60) {
    console.log(number);
  }
}
