// 17. Write a JS code for binary search algorithm

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let element = 7;
let start = 0;
let end = arr.length - 1;
let mid;
while (start <= end) {
  mid = Math.floor((start + end) / 2);

  if (arr[mid] === element) {
    console.log("the element found ");
  } else if (element < arr[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
