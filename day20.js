// let x = 10;
// function test(x) {
//   console.log(x);
// }

// test(20);
// console.log(x); // This will log 10, as the outer x is not affected by the inner x in test()

let x = 10;
let y = 20;
function test(y) {
  console.log(y);
}
test(x);
