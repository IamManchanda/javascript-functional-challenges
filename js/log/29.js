console.log({
  add: {
    log1: liftG(add)(), // undefined
    log2: liftG(add)(2)(), // 2
    log3: liftG(add)(2)(7)(), // 9
    log4: liftG(add)(3)(0)(4)(), // 7
    log5: liftG(add)(1)(2)(4)(8)(), // 15
  },
  mul: {
    log1: liftG(mul)(), // undefined
    log2: liftG(mul)(2)(), // 2
    log3: liftG(mul)(2)(7)(), // 14
    log4: liftG(mul)(3)(0)(4)(), // 0
    log5: liftG(mul)(1)(2)(4)(8)(), // 64
  },
});
