// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// third solution
function reverse(str) {
    return str.split('').reduce((acc, char) => char + acc, '');
}

/*
first solution

function reverse(str) {
    return str.split('').reverse().join('');
}
*/

/*
second solution

function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}*/

module.exports = reverse;
