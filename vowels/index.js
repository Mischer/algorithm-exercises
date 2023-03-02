// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/ig);
    return matches?.length || 0;
}

module.exports = vowels;

// my solution #2
//function vowels(str) {
//     return str.replace(/[^aeiou]/ig, '').length;
// }

// my solution #1
/*
function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str.split('').map((e) => {if (vowels.includes(e)) {
        count++;
    }});
    return count;
}*/
