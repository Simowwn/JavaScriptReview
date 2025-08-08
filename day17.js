let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
  let retVal = 0;
  if (a < b) {
    retVal = -1;
  } else if (a > b) {
    retVal = 1;
  }
  return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

// Using an arrow function for sorting
console.log("\n Using an arrow function:");
let sortedArrow = numbers.sort((a, b) => a - b);
console.log(sortedArrow);

let sortedArrowDesc = numbers.sort((a, b) => b - a);
console.log(sortedArrowDesc);
