// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return filterString(stringA) === filterString(stringB);

    function filterString(str) {
       return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }
}

/*function anagrams(stringA, stringB) {
    const mapA = makeMap(stringA.replace(/[^\w]/g, '').toLowerCase());
    const mapB = makeMap(stringB.replace(/[^\w]/g, '').toLowerCase());

    let isEqual = true;
    for(const [key,] of Object.entries(mapA)) {
        if (mapA[key] !== mapB[key]) {
            isEqual = false;
        }
    }
    return Object.keys(mapA).length === Object.keys(mapB).length && isEqual;

    function makeMap(str) {
        return str.split('').reduce((acc, char) => {
            acc[char] = (acc[char] || 1) + 1;
            return acc;
        }, {});
    }
}*/

module.exports = anagrams;
