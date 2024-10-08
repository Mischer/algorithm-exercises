const reverse = require('./reverse-int');

describe('reverse', () => {
    test('should reverse a positive number', () => {
        expect(reverse(123)).toBe(321);
    });

    test('should reverse a negative number', () => {
        expect(reverse(-123)).toBe(-321);
    });

    test('should handle numbers ending with zero', () => {
        expect(reverse(120)).toBe(21);
    });

    test('should return 0 for input 0', () => {
        expect(reverse(0)).toBe(0);
    });

    test('should handle the maximum 32-bit signed integer', () => {
        expect(reverse(2147483647)).toBe(0);
    });

    test('should handle the minimum 32-bit signed integer', () => {
        expect(reverse(-2147483648)).toBe(0);
    });

    test('should handle number that reverse within 32-bit limit', () => {
        expect(reverse(1534236469)).toBe(0);
    });

    test('should handle number just within 32-bit limit', () => {
        expect(reverse(1463847412)).toBe(2147483641);
    });

    test('should handle small negative number', () => {
        expect(reverse(-9)).toBe(-9);
    });

    test('should handle large negative number within 32-bit range', () => {
        expect(reverse(-1463847412)).toBe(-2147483641);
    });
});