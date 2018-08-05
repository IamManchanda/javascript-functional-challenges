console.log({
  log1: addG(), // undefined
  log2: addG(2)(), // 2
  log3: addG(2)(7)(), // 9
  log4: addG(3)(0)(4)(), // 7
  log5: addG(1)(2)(4)(8)(), // 15
});
