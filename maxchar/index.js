// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const object = {};
    for (const char of str) {
        object[char] = object[char] + 1 || 1;
    }

    let maxValue = 0;
    let result;
    for (const char in object) {
        if (object[char] > maxValue) {
            maxValue = object[char];
            result = char;
        }
    }
    return result;
}

module.exports = maxChar;
