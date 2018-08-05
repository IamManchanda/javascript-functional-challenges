var addM = liftM(add, '+');
var mulM = liftM(mul, '+');
var subM = liftM(sub, '-');

console.log({
  addM3and4: addM(3, 4), // { value: 7, source: "(3+4)" }
  mulM3and4: mulM(3, 4), // { value: 12, source: "(3+4)" }
  subM3and4: subM(3, 4), // {value: -1, source: "(3-4)"}
});
