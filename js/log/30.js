console.log({
  log1: arrayG(), // undefined
  log2: arrayG(2)(), // [2]
  log3: arrayG(2)(7)(), // [2, 7]
  log4: arrayG(3)(0)(4)(), // [3, 0, 4]
  log5: arrayG(1)(2)(4)(8)(), // [1, 2, 4, 8]
});
