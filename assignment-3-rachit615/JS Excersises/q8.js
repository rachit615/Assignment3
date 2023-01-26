// 8. Write a JS code to find the no of digits in a number

let number = 123456789;
let count = 0;
while (number != 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log(count);
