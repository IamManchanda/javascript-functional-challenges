var addRev = revocable(add);

console.log({
  log1: addRev.invoke(3, 4), // 7
  log2: addRev.invoke(5, 7), // 12
  log3: addRev.revoke(), // 'Function sucessfully Revoked'
  log4: addRev.invoke(5, 7), // undefined
});
