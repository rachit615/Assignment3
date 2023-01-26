function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str.charAt(i) != str.charAt(len - i - 1)) {
      return "NO";
    }
  }
  return "yes";
}

let string = window.prompt("Enter a string");
let removedSpaces = string.split(" ").join("");
console.log(removedSpaces);
// const ans = checkPalindrome(removedSpaces);
// console.log(ans);
