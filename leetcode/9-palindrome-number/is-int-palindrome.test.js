const isIntPalindrome = require('./is-int-palindrome');
describe('isIntPalindrome', () => {
    test('should return true for palindromic numbers', () => {
        expect(isIntPalindrome(121)).toBe(true);
        expect(isIntPalindrome(1221)).toBe(true);
        expect(isIntPalindrome(0)).toBe(true); // edge case: single digit
        expect(isIntPalindrome(9)).toBe(true); // edge case: single digit
        expect(isIntPalindrome(12321)).toBe(true);
    });

    test('should return false for non-palindromic numbers', () => {
        expect(isIntPalindrome(123)).toBe(false);
        expect(isIntPalindrome(10)).toBe(false);
        expect(isIntPalindrome(100)).toBe(false);
        expect(isIntPalindrome(1231)).toBe(false);
    });

    test('should return false for negative numbers', () => {
        expect(isIntPalindrome(-121)).toBe(false);
        expect(isIntPalindrome(-12321)).toBe(false);
        expect(isIntPalindrome(-1)).toBe(false); // edge case: single negative digit
    });

    test('should return false for numbers ending in 0 (but not 0 itself)', () => {
        expect(isIntPalindrome(10)).toBe(false);
        expect(isIntPalindrome(100)).toBe(false);
        expect(isIntPalindrome(120)).toBe(false);
        expect(isIntPalindrome(0)).toBe(true); // 0 itself is a palindrome
    });
});