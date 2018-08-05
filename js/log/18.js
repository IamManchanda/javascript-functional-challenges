var myArray = [];
var col = collect(fromToFn(0, 2), myArray);

console.log({
  time1: col(), // 0
  time2: col(), // 1
  time3: col(), // undefined
  myArray, // [0, 1]
});
