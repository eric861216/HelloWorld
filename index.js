// 主模块 - 简单的数学工具库
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

console.log("Math Utils v1.0");
console.log("add(2, 3) =", add(2, 3));
console.log("subtract(5, 2) =", subtract(5, 2));
