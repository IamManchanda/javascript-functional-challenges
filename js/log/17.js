var ele = element([
  'a', 'b', 'c', 'd',
]);

console.log({
  time1: ele(), // 'a'
  time2: ele(), // 'b'
  time3: ele(), // 'c'
  time4: ele(), // 'd'
  time5: ele(), // undefined
});
