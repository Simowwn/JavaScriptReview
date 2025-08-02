// Expected Output
// Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
// Total: 1300

function Rose() {
  var unitPrice = 8;
  var quantity = 70;
  var value = unitPrice * quantity;
  console.log(
    "Rose - " +
      "Unit price: " +
      unitPrice +
      ", Quantity: " +
      quantity +
      ", Total price: " +
      value
  );
  return value; // Return the value
}

function Lily() {
  var unitPrice = 10;
  var quantity = 50;
  var value = unitPrice * quantity;
  console.log(
    "Lily - " +
      "Unit price: " +
      unitPrice +
      ", Quantity: " +
      quantity +
      ", Total price: " +
      value
  );
  return value; // Return the value
}

function Tulip() {
  var unitPrice = 2;
  var quantity = 120;
  var value = unitPrice * quantity;
  console.log(
    "Tulip - " +
      "Unit price: " +
      unitPrice +
      ", Quantity: " +
      quantity +
      ", Total price: " +
      value
  );
  return value; // Return the value
}

console.log("Total Price Calculation for Flowers");
var totals = Rose() + Lily() + Tulip();
console.log("Total Price :" + totals);

//Cisco Apparoach
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log(
  "Rose – unit price:",
  rosePrice,
  ", quantity:",
  numberOfRoses,
  ", value:",
  rosesValue
);
console.log(
  "Lily – unit price:",
  lilyPrice,
  ", quantity:",
  numberOfLilies,
  ", value:",
  liliesValue
);
console.log(
  "Tulip – unit price:",
  tulipPrice,
  ", quantity:",
  numberOfTulips,
  ", value:",
  tulipsValue
);
console.log("Total: ", total);

let name = "Maxwell Wright";
let phone = "(0191)7196495";
let email = "Curabitur.egestas.nunc@nonummyac.co.uk";

console.log(name + " " + phone + " " + email);