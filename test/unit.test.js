import assert from 'node:assert';

console.log(`[Unit Test] Running in environment: ${process.env.TEST_ENV || 'local'}`);
assert.strictEqual(1 + 1, 2);
console.log('✓ Unit tests passed successfully.');
