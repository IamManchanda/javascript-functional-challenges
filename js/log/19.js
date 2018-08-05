var fil = filter(fromToFn(0, 5), function third(value) {
  return (value % 3) === 0;
});

console.log({
  firstTime: fil(),
  secondTime: fil(),
  thirdTime: fil(),
});
