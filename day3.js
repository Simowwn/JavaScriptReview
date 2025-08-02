console.log("Program Block Example");
let counter;
console.log(counter); // -> undefined
{
  counter = 1;
  console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2

console.log("\n Program Block Example2");
let countera;
console.log(countera); //  ->  undefined
{
  countera = 1;
  {
    console.log(countera); //  ->  1
  }
}
countera = countera + 1;
console.log(countera); //  ->  2

console.log("\n Program Block Example3");
let height = 180;
{
  let weight = 70;
  console.log(height); //  ->  180
  console.log(weight); //  ->  70
}
console.log(height); // -> 180
// console.log(weight); // -> ReferenceError: weight is not defined

console.log("Program Block Example4 with var");
var heighta = 180;
{
  var weighta = 70;
  console.log(heighta); //  ->  180
  console.log(weighta); //  ->  70
}
console.log(heighta); //  ->  180
console.log(weighta); //  ->  70

console.log("\nFunction Example");
function testFunction() {
  console.log("Hello");
  console.log("World");
}

var globalGreeting = "Good  ";

function testFunction() {
  var localGreeting = "Morning  ";
  console.log("function:");
  console.log(globalGreeting);
  console.log(localGreeting);
}

testFunction();

console.log("main  program:");
console.log(globalGreeting);
// console.log(localGreeting); //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
