// Using explicit code instead of implicit arrows.
const identity = function (n) {
  return n;
};

const funky = function (o) {
  o = null;
};

const swap = function (a, b) {
  const temp = a;
  a = b;
  b = temp;
};

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

const double = function (a) {
  return a * 2;
};

const square = function (a) {
  return a ** 2;
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

const curry = function (fn, a) {
  return function (b) {
    return fn(a, b);
  };
};

const twice = function (fn) {
  return function (a) {
    return fn(a, a);
  };
};

const reverse = function (fn) {
  return function (a, b) {
    return fn(b, a);
  };
};

const composeU = function (fnA, fnB) {
  return function (a) {
    return fnB(fnA(a));
  };
};

const composeB = function (fnA, fnB) {
  return function (a, b, c) {
    return fnB(fnA(a, b), c);
  };
};

const limitFn = function (fn, n) {
  return function (a, b) {
    if (n >= 1) { 
      n -= 1; 
      return fn(a, b);
    }
    return undefined;
  };
};

const fromFn = function (a) {
  return function () {
    const b = a;
    a += 1;
    return b;
  };
};

const toFn = function (fnGen, limit) {
  return function () {
    let value = fnGen();
    if (value < limit) return value;
    return undefined;
  };
};

const fromToFn = function (a, limit) {
  return toFn(fromFn(a), limit);
};

// 5 mins - challenge 4
