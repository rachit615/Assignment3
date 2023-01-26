// largest number

let arr = [1, 4, 2, 3, 6, 4, 5, 7];
let max = Number.MIN_VALUE; // in java it was [Integer.MIN_VALUE]

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= max) {
    max = arr[i];
  }
}
console.log(max);
