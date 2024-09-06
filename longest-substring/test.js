const tooSum = require('./index');

test('function tooSum exists', () => {
  expect(typeof tooSum).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [2, 7, 11, 15];
  const sum = tooSum(arr, 9);

  expect(sum).toEqual([0, 1]);
});

/*test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = tooSum(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = tooSum(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = tooSum(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});*/
