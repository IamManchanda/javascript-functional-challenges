var myArray = [];
var col = collect(fromToFn(0, 2), myArray);

console.log({
  firstTime: col(),
  secondTime: col(),
  thirdTime: col(),
  myArray,
});
