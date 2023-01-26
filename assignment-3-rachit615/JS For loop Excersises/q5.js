let str = "javascript";
let ans = "";
for (let i = 0; i < str.length; i++) {
  if (i % 2 == 0) {
    ans += str.charAt(i);
  } else {
    ans += "Z";
  }
}
console.log(ans);
