var addLtd = limitFn(add, 1);
console.log({
  time1: addLtd(3, 4), // 7
  time2: addLtd(3, 5), // undefined
});
