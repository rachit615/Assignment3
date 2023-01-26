// 9. Write a JS code to calculate the sum of digits in a number

let number = 11111;
let sum = 0;
while (number != 0) {
  lastDigit = number % 10;
  sum += lastDigit;
  number = Math.floor(number / 10);
}
console.log(sum);
