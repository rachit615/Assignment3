// 16. Write a JS code to find duplicate values in a given array

let arr = [1, 2, 3, 4, 3, 5, 3, 5];
var set = new Set();
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      set.add(arr[i]);
    }
  }
}
console.log(set);
