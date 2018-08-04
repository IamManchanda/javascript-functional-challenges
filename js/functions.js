// Using explicit code instead of implicit arrows.

let x;
let y;

const identity = function (n) {
  return n;
};

const funky = function (o) {
  o = null;
};
x = [];
funky(x);

const swap = function (a, b) {
  const temp = a;
  a = b;
  b = temp;
};

x = 1;
y = 2;
swap(x, y);

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

const identityF = function (n) {
  return function () {
    return n;
  };
};

const addF = function (a) {
  return function (b) {
    return a + b;
  };
};

// Higher order functions
const liftF = function (fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};
