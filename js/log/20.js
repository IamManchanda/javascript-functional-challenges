var con = concat(fromToFn(0, 3), fromToFn(0, 2));

console.log({
  time1: con(), // 0
  time2: con(), // 1
  time3: con(), // 2
  time4: con(), // 0
  time5: con(), // 1
  time6: con(), // undefined
});
