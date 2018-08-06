// Using explicit code instead of implicit code for function representation.
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

const mul = function (a, b) {
  return a * b;
};

const sub = function (a, b) {
  return a - b;
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
    const value = fnGen();
    if (value < limit) return value;
    return undefined;
  };
};

const fromToFn = function (a, limit) {
  return toFn(fromFn(a), limit);
};

const element = function (arr, fnGen = fromToFn(0, arr.length)) {
  return function () {
    const index = fnGen();
    if (index !== undefined) return arr[index];
    return undefined;
  };
};

const collect = function (fnGen, arr) {
  return function () {
    const value = fnGen();
    if (value !== undefined) arr.push(value);
    return value;
  };
};

const filter = function (fnGen, fnPred) {
  return function recur() {
    const value = fnGen();
    if (value === undefined || fnPred(value)) return value;
    return recur();
  };
};

const concat = function (fnGen1, fnGen2) {
  let fnGen = fnGen1;
  return function () {
    const value = fnGen();
    if (value !== undefined) return value;
    fnGen = fnGen2;
    return fnGen();
  };
};

const genSymF = function (prefix) {
  let number = 0;
  return function () {
    number += 1;
    return `${prefix}${number}`;
  };
};

const fibonacciF = function (a, b) {
  return function () {
    const next = a;
    a = b;
    b += next;
    return next;
  };
};

const counter = function (value) {
  return {
    up() {
      value += 1;
      return value;
    },
    down() {
      value -= 1;
      return value;
    },
  };
};

const revocable = function (fn) {
  return {
    invoke(...a) {
      if (fn !== undefined) return fn(...a);
      return undefined;
    },
    revoke() {
      fn = undefined;
      return 'Function sucessfully Revoked';
    },
  };
};

const m = function (value, source = value) {
  return {
    value,
    source: String(source),
  };
};

const liftM = function (fn, op) {
  return function (a, b) {
    if (typeof a === 'number') a = m(a);
    if (typeof b === 'number') b = m(b);
    return m(
      fn(a.value, b.value),
      `(${a.source}${op}${b.source})`,
    );
  };
};

const exp = function (value) {
  return (Array.isArray(value)) ? value[0](
    exp(value[1]), 
    exp(value[2]),
  ) : value;
};

const addG = function (first) {
  const more = function (next) {
    if (next === undefined) return first;
    first += next;
    return more;
  };
  if (first !== undefined) return more;
  return undefined;
};

const liftG = function (fn) {
  return function (first) {
    if (first === undefined) return undefined;
    return function more(next) {
      if (next === undefined) return first;
      first = fn(first, next);
      return more;
    };
  };
};

const arrayG = function (first) {
  if (first === undefined) return [];
  return liftG(function (arr, value) {
    arr.push(value);
    return arr;
  })([first]);
};

const continuize = function (fnA) {
  return function (fnB, arg) {
    return fnB(fnA(arg));
  };
};

const constructor = function (spec) {
  // eslint-disable-next-line prefer-const
  let { member } = spec;
  const { other } = otherConstructor(spec);
  const method = function () {
    // spec, member, other, method
  };
  return Object.freeze({ method, other });
};

const vector = function () {
  const array = [];
  return {
    get(index) {
      return array[+index];
    },
    store(index, value) {
      array[+index] = value;
    },
    append(value) {
      // array.push(value) - Don't use as it gives chance to exploit for hackers 
      array[array.length] = value;
    },
  };
};
