var genG = genSymF('G');
var genH = genSymF('H');

console.log({
  time1genG: genG(), // 'G1'
  time1genH: genH(), // 'H1'
  time2genG: genG(), // 'G2'
  time2genH: genH(), // 'H2'
});
