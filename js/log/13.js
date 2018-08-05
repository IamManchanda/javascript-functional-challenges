var addLtd = limitFn(add, 1);
console.log({
  firstTime: addLtd(3, 4),
  secondTime: addLtd(3, 5),
});
