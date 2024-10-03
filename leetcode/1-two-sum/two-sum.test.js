const twoSum = require('./two-sum');
describe('twoSum function', () => {
    test('Should return indices [0, 1] for input [2, 7, 11, 15] and target 9', () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });

    test('Should return indices [1, 2] for input [3, 2, 4] and target 6', () => {
        const result = twoSum([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });

    test('Should return indices [0, 1] for input [3, 3] and target 6', () => {
        const result = twoSum([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });

    test('Should return indices [1, 3] for input [1, 3, 5, 7] and target 10', () => {
        const result = twoSum([1, 3, 5, 7], 10);
        expect(result).toEqual([1, 3]);
    });

    test('Should return undefined for input [1, 2, 3] and target 10', () => {
        const result = twoSum([1, 2, 3], 10);
        expect(result).toBeUndefined();
    });
});