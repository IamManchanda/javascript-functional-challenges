var object = counter(10);
var { up, down } = object;

console.log({
  incOrDec1: up(), // 11
  incOrDec2: down(), // 10
  incOrDec3: down(), // 9
  incOrDec4: up(), // 10
});
