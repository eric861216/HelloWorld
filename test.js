// 简单的测试文件
const { add, subtract } = require('./index');

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

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
