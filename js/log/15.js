var index = toFn(fromFn(1), 3);
console.log({
  time1: index(), // 1
  time2: index(), // 2
  time3: index(), // undefined
});
