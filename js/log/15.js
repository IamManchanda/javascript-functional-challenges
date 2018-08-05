var index = toFn(fromFn(1), 3);
console.log({
  firstTime: index(),
  secondTime: index(),
  thirdTime: index(),
});
