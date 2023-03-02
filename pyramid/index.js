// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    if (row >= n) {
        return;
    }

    if (stair.length === n * 2 - 1) {
        console.log(stair);
        return pyramid(n, row + 1, '');
    }

    const midPoint = Math.floor( (n * 2 - 1) / 2);
    const add = (stair.length < midPoint - row) || (stair.length > midPoint + row) ? ' ' : '#';
    pyramid(n, row, stair + add);
}

module.exports = pyramid;

//my solution #3
/* const midPoint = Math.floor( (n * 2 - 1) / 2);
for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n * 2 - 1; column++) {
        if (column >= midPoint - row && column <= midPoint + row) {
            stair += '#';
        } else {
            stair += ' ';
        }
    }

    console.log(stair);
}*/

//my solution #2
/* const maxColumns = n + n - 1;
for (let row = 1; row <= n; row++) {
    let stair = '';
    for (let column = 0; column < maxColumns; column++) {
        if (column < n - row || column >= maxColumns - (n - row)) {
            stair += ' ';
        } else {
            stair += '#';
        }
    }

    console.log(stair);
}*/


// my solution
/*
function pyramid(n) {
    const maxColumns = n + n - 1;
    for (let row = 1; row <= n; row++) {
        let stair = new Array(maxColumns);
        stair.fill(' ', 0, n - row);
        stair.fill('#', n - row, maxColumns - (n - row));
        stair.fill(' ', maxColumns - (n - row), maxColumns);
        console.log(stair.join(''));
    }
}*/
