//Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and
// undefined types using (when possible) literals and constructor functions.

let isActive = true;
let isTrue = Boolean(true);

let num = 2;
let num2 = Number(22);

let bingInt1 = 3213124124312412;
let bingInt2 = BigInt(123456789012345678901234567890);

let str = "Hello, World!";
let str2 = String("Hello, Universe!");

let something;
let prxsomething = undefined;

//Question 2: Print all values and all types of those values using console.log. Try to use string interpolation
// to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`${isActive} [${typeof isActive}]`);
console.log(`${isTrue} [${typeof isTrue}]`);
console.log(`${num} [${typeof num}]`);
console.log(`${num2} [${typeof num2}]`);
console.log(`${bingInt1} [${typeof bingInt1}]`);
console.log(`${bingInt2} [${typeof bingInt2}]`);
console.log(`${str} [${typeof str}]`);
console.log(`${str2} [${typeof str2}]`);
console.log(`${something} [${typeof something}]`);
console.log(`${prxsomething} [${typeof prxsomething}]`);

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let b = Boolean(BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);
// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let bo = Boolean(bi);
console.log(`${bo} [${typeof bo}]`);

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.
//Number, Boolean, BigInt, String, undefined
let numx = 10;
let numy = 20;

let addNumber = numx + numy; // Number
console.log(`${addNumber} [${typeof addNumber}]`);

let isclicked = true;
let ispressed = false;

let sumofBoolean = isclicked + ispressed; // Number
console.log(`${sumofBoolean} [${typeof sumofBoolean}]`);

let bigInt1 = BigInt(3213124124312412);
let bigInt2 = BigInt(123456789012345678901234567890);

let sumofBigInt = bigInt1 + bigInt2; // BigInt
console.log(`${sumofBigInt} [${typeof sumofBigInt}]`);

let str1 = "I love";
let str3 = " JavaScript";

let sumeofString = str1 + str3;
console.log(`${sumeofString} [${typeof sumeofString}]`);

let undef1;
let undef2;
let sumofUndefined = undef1 + undef2; // NaN
console.log(`${sumofUndefined} [${typeof sumofUndefined}]`);

//or
// let b = true + false;
// let n = 100 + 200;
// let bi = 100n + 200n;
// let s = "He" + "llo";
// let u = undefined + undefined;

// console.log(`${b} [${typeof b}]`); // !!! number
// console.log(`${n} [${typeof n}]`);
// console.log(`${bi} [${typeof bi}]`);
// console.log(`${s} [${typeof s}]`);
// console.log(`${u} [${typeof u}]`); // !!! number

//Question 5: Try adding two values of different types and check the results.

let mixSumn = str1 + numx; // String
console.log(`${mixSumn} [${typeof mixSumn}]`);

const str8 = 42 + +"1";
console.log(`${str8} [${typeof str8}]`); // String
