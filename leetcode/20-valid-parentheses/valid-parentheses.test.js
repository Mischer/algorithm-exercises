const validParentheses = require('./valid-parentheses');

describe('validParentheses function', () => {

    test('should return true for valid parentheses', () => {
        const input = '()[]{}';
        const result = validParentheses(input);
        expect(result).toBe(true);
    });

    test('should return false for single unmatched parentheses', () => {
        const input = '(';
        const result = validParentheses(input);
        expect(result).toBe(false);
    });

    test('should return false for invalid parentheses sequence', () => {
        const input = '(]';
        const result = validParentheses(input);
        expect(result).toBe(false);
    });

    test('should return false for a string with unmatched closing bracket', () => {
        const input = '([)]';
        const result = validParentheses(input);
        expect(result).toBe(false);
    });

    test('should return true for a valid complex sequence of parentheses', () => {
        const input = '{[()]}';
        const result = validParentheses(input);
        expect(result).toBe(true);
    });

    test('should return true for an empty string (edge case)', () => {
        const input = '';
        const result = validParentheses(input);
        expect(result).toBe(true);
    });

    test('should return false for string of length 1', () => {
        const input = ')';
        const result = validParentheses(input);
        expect(result).toBe(false);
    });

    test('should return true for large valid input (performance check)', () => {
        const input = '()'.repeat(50000);
        const result = validParentheses(input);
        expect(result).toBe(true);
    });

    test('should return false for large invalid input (performance check)', () => {
        const input = '('.repeat(50000) + ')';
        const result = validParentheses(input);
        expect(result).toBe(false);
    });
});
