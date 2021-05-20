const add = (a, b) => {
  return `Sum of ${a} and ${b} is ${a + b}`;
};

const sub = (a, b) => {
  return `Difference of ${a} and ${b} is ${a - b}`;
};

const mul = (a, b) => {
  return `Product of ${a} and ${b} is ${a * b}`;
};

const div = (a, b) => {
  return `${a} Divided by ${b} gives ${a / b}`;
};

module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
