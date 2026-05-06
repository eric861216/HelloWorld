// 主模块 - 数学工具库
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("除数不能为零");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

console.log("Math Utils v2.0");
console.log("add(2, 3) =", add(2, 3));
console.log("multiply(3, 4) =", multiply(3, 4));
console.log("divide(10, 2) =", divide(10, 2));
