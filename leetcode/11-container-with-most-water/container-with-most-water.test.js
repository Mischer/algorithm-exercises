const containerWithMostWater = require('./container-with-most-water');

describe('containerWithMostWater function', () => {
    test('should return the correct max area for a basic test case', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const result = containerWithMostWater(height);
        expect(result).toBe(49);  // The max area is formed between index 1 and 8
    });

    test('should return 0 for empty array', () => {
        const height = [];
        const result = containerWithMostWater(height);
        expect(result).toBe(0);  // No water can be trapped with no heights
    });

    test('should return 0 for array with one element', () => {
        const height = [1];
        const result = containerWithMostWater(height);
        expect(result).toBe(0);  // No water can be trapped with only one height
    });

    test('should handle two heights correctly', () => {
        const height = [1, 2];
        const result = containerWithMostWater(height);
        expect(result).toBe(1);  // Only two lines, max area = 1
    });

    test('should handle equal heights correctly', () => {
        const height = [5, 5, 5, 5];
        const result = containerWithMostWater(height);
        expect(result).toBe(15);  // Max area is between the two farthest lines
    });

    test('should return correct result for increasing height array', () => {
        const height = [1, 2, 3, 4, 5];
        const result = containerWithMostWater(height);
        expect(result).toBe(6);  // Max area is between index 1 and 5
    });

    test('should return correct result for decreasing height array', () => {
        const height = [5, 4, 3, 2, 1];
        const result = containerWithMostWater(height);
        expect(result).toBe(6);  // Max area is between index 0 and 4
    });

    test('should handle a large input efficiently', () => {
        const height = Array(10000).fill(1000);  // Large input, all heights the same
        const result = containerWithMostWater(height);
        expect(result).toBe(9999000);  // Max area is between the first and last index
    });
});
