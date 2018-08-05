var fil = filter(fromToFn(0, 5), function third(value) {
  return (value % 3) === 0;
});

console.log({
  time1: fil(),
  time2: fil(),
  time3: fil(),
});
