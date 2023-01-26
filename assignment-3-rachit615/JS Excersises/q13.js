// 13. Write a JS code to print the Fibonacci series for a given value of N

// Enter the number of terms: 10
// Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
let n = 10;
let a = 0;
let b = 1;

for (let i = 2; i < n; i++) {
  c = a + b;
  console.log(c + ",");

  a = b;
  b = c;
}
