// 6. Write a JS code to find the power of a number using for loop

let number = 5;
let power = 5;
let result = 1;
if (power == 0) {
  console.log("0");
}
for (let i = 1; i <= power; i++) {
  result = result * number;
}
console.log(result);
