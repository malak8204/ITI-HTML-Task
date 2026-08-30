var city = "Cairo";
var City = "Alexandria";
console.log(city, City, city === City);
var age = 22;
var isGraduated = false;
var Degree = null;
console.log(typeof age, typeof isGraduated,  typeof Degree);
var country = "Egypt";
console.log(country[2], country.toUpperCase(), `I live in ${country}`);
var price = 250;
var quantity = 4;
console.log(price * quantity, price % quantity);
console.log(price == "250", price === "250");
var hasTicket = true;
var isVip = false;
console.log(hasTicket && isVip, hasTicket || isVip, !hasTicket);
if (age >= 18) {
  console.log(" adult");
} else {
  console.log(" Not an adult");
}
var hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("you can't drive");
  }
}
var day = "Thursday";
switch (day) {
  case "Friday":
    console.log("Weekend");
    break;
  case "Thursday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}
var stock = 0;
console.log(stock > 0 ? "In Stock" : "Out of Stock");

function calculateArea(w, h) {
  return w * h;
}
const calculateAreaArrow = (w, h) => w * h;
for (var i = 1; i <= 5; i++) {
  console.log(i, calculateArea(i, 2));
}
var count = 3;
while (count > 0) {
  console.log("Countdown:", count, calculateAreaArrow(count, 2));
  count--;
}
var attempts = 0;
do {
  attempts++;
  console.log( attempts);
} while (attempts < 2);
var fruits = ["Mango", "Banana", "Grapes"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
