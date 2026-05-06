// 简单的测试文件
const { add, subtract, multiply, divide } = require('./index');

let passed = 0;
let failed = 0;

function assert(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.log(`❌ FAIL: ${testName} (got ${actual}, expected ${expected})`);
    failed++;
  }
}

assert(add(2, 3), 5, "add(2, 3) should be 5");
assert(add(-1, 1), 0, "add(-1, 1) should be 0");
assert(subtract(5, 2), 3, "subtract(5, 2) should be 3");
assert(subtract(0, 0), 0, "subtract(0, 0) should be 0");

// 新增：乘法测试
assert(multiply(3, 4), 12, "multiply(3, 4) should be 12");
assert(multiply(0, 100), 0, "multiply(0, 100) should be 0");
assert(multiply(-2, 3), -6, "multiply(-2, 3) should be -6");

// 新增：除法测试
assert(divide(10, 2), 5, "divide(10, 2) should be 5");
assert(divide(7, 2), 3.5, "divide(7, 2) should be 3.5");

// 测试除零异常
try {
  divide(1, 0);
  console.log("❌ FAIL: divide(1, 0) should throw");
  failed++;
} catch (e) {
  console.log("✅ PASS: divide(1, 0) throws error");
  passed++;
}

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
