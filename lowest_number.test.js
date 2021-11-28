const lowestNumber = require('./lowest_number');

test('Lowest number in first index', () => {
  expect(lowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(1);
});

test('Lowest number in last index', () => {
  expect(lowestNumber([109, 108, 107, 106, 105, 104, 103, 102, 101])).toBe(101);
});

test('Lowent number in middle', () => {
  expect(lowestNumber([47, 23, 509, 424, 9, 280, 90, 9999, 77])).toBe(9);
});

test('Lowest number is negaive', () => {
  expect(lowestNumber([0, 17, -2, -3, 14, 1, -5, 3])).toBe(-5);
});

