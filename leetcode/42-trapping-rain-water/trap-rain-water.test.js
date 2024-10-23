const trap = require('./trap-rain-water');

describe('trap', () => {
    test('should return 0 for an empty array', () => {
        expect(trap([])).toBe(0);
    });

    test('should return 0 for array with no trapping water', () => {
        expect(trap([1, 2, 3, 4, 5])).toBe(0);
    });

    test('should correctly calculate trapped water for simple case', () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });

    test('should correctly calculate trapped water for uniform height', () => {
        expect(trap([4, 4, 4, 4])).toBe(0);
    });

    test('should return correct result for large heights', () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    test('should handle cases with multiple peaks', () => {
        expect(trap([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });
});
