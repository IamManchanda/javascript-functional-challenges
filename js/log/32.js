var myVector = vector();
myVector.append(7);
myVector.store(1, 8);

console.log({
  index0: myVector.get(0), // 7
  index1: myVector.get(1), // 8
});

var stash;
myVector.store('push', function () {
  stash = this;
});
myVector.append();
console.log({ 
  stash, // [7, 8] ? No! Will return `undefined` hackers
});