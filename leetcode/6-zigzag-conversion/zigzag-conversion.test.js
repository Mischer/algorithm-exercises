const convert = require('./zigzag-conversion');
describe('ZigZag Conversion', () => {
    test('should handle the example case with numRows = 3', () => {
        const input = "PAYPALISHIRING";
        const numRows = 3;
        const expectedOutput = "PAHNAPLSIIGYIR";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle the example case with numRows = 4', () => {
        const input = "PAYPALISHIRING";
        const numRows = 4;
        const expectedOutput = "PINALSIGYAHRPI";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should return the original string when numRows is 1', () => {
        const input = "ABCDEFG";
        const numRows = 1;
        const expectedOutput = "ABCDEFG";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle numRows greater than the length of the string', () => {
        const input = "SHORT";
        const numRows = 10;
        const expectedOutput = "SHORT";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle empty string input', () => {
        const input = "";
        const numRows = 3;
        const expectedOutput = "";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle numRows equal to the length of the string', () => {
        const input = "HELLO";
        const numRows = 5;
        const expectedOutput = "HELLO";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle numRows = 2', () => {
        const input = "ABCDEFGHIJK";
        const numRows = 2;
        const expectedOutput = "ACEGIKBDFHJ";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle a single-character string', () => {
        const input = "A";
        const numRows = 5;
        const expectedOutput = "A";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle repetitive characters in the string', () => {
        const input = "AAAAAA";
        const numRows = 3;
        const expectedOutput = "AAAAAA";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle numRows equal to 0 (edge case)', () => {
        const input = "EDGECASE";
        const numRows = 0;
        // Expecting the function to return an empty string or handle the case appropriately
        const expectedOutput = "";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });

    test('should handle numRows as negative number (invalid input)', () => {
        const input = "INVALID";
        const numRows = -3;
        // Expecting the function to return an empty string or handle the case appropriately
        const expectedOutput = "";
        expect(convert(input, numRows)).toBe(expectedOutput);
    });
});