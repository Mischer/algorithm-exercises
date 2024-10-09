// stringToInt.test.js
const stringToInt = require('./string-to-int'); // Adjust the path if needed

describe('stringToInt function', () => {

    // Basic Conversion
    test('Converts "42" to 42', () => {
        expect(stringToInt("42")).toBe(42);
    });
    test('Converts "-42" to -42', () => {
        expect(stringToInt("-42")).toBe(-42);
    });

    // Leading and Trailing Whitespace
    test('Converts "   42" to 42 with leading whitespace', () => {
        expect(stringToInt("   42")).toBe(42);
    });
    test('Converts "42   " to 42 with trailing whitespace', () => {
        expect(stringToInt("42   ")).toBe(42);
    });
    test('Converts "   -42   " to -42 with leading and trailing whitespace', () => {
        expect(stringToInt("   -42   ")).toBe(-42);
    });

    // Sign Handling
    test('Returns 0 for "+-12" with conflicting signs', () => {
        expect(stringToInt("+-12")).toBe(0);
    });
    test('Returns 0 for "-" only', () => {
        expect(stringToInt("-")).toBe(0);
    });
    test('Returns 0 for "+" only', () => {
        expect(stringToInt("+")).toBe(0);
    });

    // Overflow and Underflow
    test('Returns INT_MAX for "2147483648" (overflow case)', () => {
        expect(stringToInt("2147483648")).toBe(2147483647);
    });
    test('Returns INT_MIN for "-2147483649" (underflow case)', () => {
        expect(stringToInt("-2147483649")).toBe(-2147483648);
    });

    // Non-digit Characters
    test('Stops reading at non-digit character in "123abc"', () => {
        expect(stringToInt("123abc")).toBe(123);
    });
    test('Returns 0 for "words and 987" with initial non-numeric characters', () => {
        expect(stringToInt("words and 987")).toBe(0);
    });
    test('Stops reading at non-digit character after leading zero in "0-1"', () => {
        expect(stringToInt("0-1")).toBe(0);
    });

    // Empty and Non-numeric Strings
    test('Returns 0 for an empty string', () => {
        expect(stringToInt("")).toBe(0);
    });
    test('Returns 0 for a string with only whitespace', () => {
        expect(stringToInt("    ")).toBe(1);
    });
    test('Returns 0 for "abc" with no digits', () => {
        expect(stringToInt("abc")).toBe(0);
    });
});