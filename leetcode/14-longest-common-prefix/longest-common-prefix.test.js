const longestCommonPrefix = require('./longest-common-prefix');

describe('longestCommonPrefix', () => {
    test('should return empty string for an empty array', () => {
        expect(longestCommonPrefix([])).toBe('');
    });

    test('should return the only string if array has one string', () => {
        expect(longestCommonPrefix(['hello'])).toBe('hello');
    });

    test('should return empty string if no common prefix exists', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });

    test('should return common prefix for an array of identical strings', () => {
        expect(longestCommonPrefix(['apple', 'apple', 'apple'])).toBe('apple');
    });

    test('should return correct common prefix for different strings', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });

    test('should return empty string for strings with no matching start', () => {
        expect(longestCommonPrefix(['a', 'b', 'c'])).toBe('');
    });

    test('should handle large input efficiently', () => {
        const input = Array(1000).fill('prefixCommonValue');
        expect(longestCommonPrefix(input)).toBe('prefixCommonValue');
    });

    test('should handle case with one string being the prefix of another', () => {
        expect(longestCommonPrefix(['prefix', 'prefixCommon', 'prefixCommonValue'])).toBe('prefix');
    });
});