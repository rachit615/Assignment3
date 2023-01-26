// Example output:
// Please make your guess:
// 4544
// Sorry that was wrong.
// Please make your guess:
// 4444
// Sorry that was wrong.
// Please make your guess:
// 0704
// That was correct!

let pin = "0704";

for (let chance = 1; chance <= 4; chance++) {
  let input = window.prompt("Please make your guess");
  if (input == pin) {
    console.log("That was correct");
    break;
  } else {
    console.log("Sorry that was wrong...Try again!!");
  }
}
