const test = require('tape');

test('A passing test', (assert) => {
   assert.pass('this test will pass.');

   assert.end();
});


test('Assertions with tape.', (assert) => {
   const expected = 'Something to test';
   const actual = 'Something to test';

   assert.equal(actual, expected, 'Given to mismatched vals, .equal() => bug rep')

   assert.end();
});

