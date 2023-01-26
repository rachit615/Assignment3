// 12. Write a JS code to find product of two arrays

let arr1 = [1, 2, 3];
let arr2 = [2, 4, 5, 6, 7];

let prod = [];
let i = 0;
let j = 0;
let k = 0;
while (i < arr1.length && j < arr2.length) {
  prod[k] = arr1[i] * arr2[j];
  i++;
  j++;
  k++;
}
while (i < arr1.length) {
  prod[k] = arr1[i];
  k++;
  i++;
}
while (j < arr2.length) {
  prod[k] = arr2[j];
  k++;
  j++;
}
console.log(prod);
