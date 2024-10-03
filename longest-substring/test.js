const longestSubstring = require('./index');

// Тесты для функции longestSubstring
describe('longestSubstring function', () => {
  test('Should return 3 for input "abcabcbb"', () => {
    const result = longestSubstring("abcabcbb");
    expect(result).toBe(3);
  });

  test('Should return 1 for input "bbbbb"', () => {
    const result = longestSubstring("bbbbb");
    expect(result).toBe(1);
  });

  test('Should return 3 for input "pwwkew"', () => {
    const result = longestSubstring("pwwkew");
    expect(result).toBe(3);
  });

  test('Should return 3 for input "dvdf"', () => {
    const result = longestSubstring("dvdf");
    expect(result).toBe(3);
  });

  test('Should return 1 for input " "', () => {
    const result = longestSubstring(" ");
    expect(result).toBe(1);
  });

  test('Should return 0 for empty string', () => {
    const result = longestSubstring("");
    expect(result).toBe(0);
  });

  test('Should return 5 for input "abcde"', () => {
    const result = longestSubstring("abcde");
    expect(result).toBe(5);
  });

  test('Should return 7 for input "abcdefgabcdef"', () => {
    const result = longestSubstring("abcdefgabcdef");
    expect(result).toBe(7);
  });
});