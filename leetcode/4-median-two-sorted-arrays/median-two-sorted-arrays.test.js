const medianTwoSortedArrays = require('./median-two-sorted-arrays');
describe('medianTwoSortedArrays function', () => {
    test('Should return 2 input [1, 2 ,3]', () => {
        const result = medianTwoSortedArrays([1, 3], [2]);
        expect(result).toEqual(2);
    });

    test('Should return 2.5 for input [1, 2 , 3 , 4]]', () => {
        const result = medianTwoSortedArrays([1, 3], [2, 4]);
        expect(result).toEqual(2.5);
    });

    test('Should return 0 for input [0, 0, 0, 0]]', () => {
        const result = medianTwoSortedArrays([0, 0], [0, 0]);
        expect(result).toEqual(0);
    });
});