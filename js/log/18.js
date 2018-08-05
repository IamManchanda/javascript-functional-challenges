var myArray = [];
var col = collect(fromToFn(0, 2), myArray);

console.log({
  time1: col(),
  time2: col(),
  time3: col(),
  myArray,
});
