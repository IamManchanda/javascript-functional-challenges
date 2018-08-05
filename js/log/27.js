console.log({
  justNumberExpression: exp(42), // 42
  simpleArrayExpression: exp([mul, 5, 11]), // 55
  nestedArrayExpression: exp([
    Math.sqrt,
    [
      add,
      [square, 3],
      [square, 4],
    ],
  ]), // 5
});
