var index = toFn(fromFn(1), 3);
console.log({
  time1: index(),
  time2: index(),
  time3: index(),
});
