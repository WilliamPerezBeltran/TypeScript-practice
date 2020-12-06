var counter;
counter = 234;
console.log(counter);
function setCounter(max) {
  if (max === void 0) {
    max = 10;
  }
  console.log(max);
  // return max
}
function setCounter1(max) {
  if (max === void 0) {
    max = 10;
  }
  console.log(max);
  return max++;
}
console.log(setCounter());
console.log(setCounter1());
var arrayw;
arrayw = ['s', 's', 's'];
