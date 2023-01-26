// 11. Write a JS code to find the number of zeros in 2D Matrix

let matrix = [
  [1, 0, 3],
  [0, 5, 7],
  [2, 9, 0],
];
let count = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == 0) {
      count++;
    }
  }
}
console.log(count);
