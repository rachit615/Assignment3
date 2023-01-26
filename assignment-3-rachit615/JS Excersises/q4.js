// 4. Write a JS code to delete all occurrence of element in given array

let arr = [1, 4, 6, 4, 6, 7, 4, 6, 2];
let element = 6;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == element) {
    continue;
  } else {
    console.log(arr[i]);
  }
}
