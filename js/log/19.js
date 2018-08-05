var fil = filter(fromToFn(0, 5), function third(value) {
  return (value % 3) === 0;
});

console.log({
  time1: fil(), // 0
  time2: fil(), // 3
  time3: fil(), // undefined
});
