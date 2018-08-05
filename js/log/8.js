console.log({
  addCurry: curry(add, 3)(4), // 7
  mulCurry: curry(mul, 5)(6), // 30
});
