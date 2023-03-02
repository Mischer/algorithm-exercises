// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
 if (n === row) {
     // console.log('END');
     return;
 }

 if (stair.length === n) {
     console.log(stair);
     steps(n, row + 1);
     // console.log('fninsh1');
     return;
 }

 const add = stair.length <= row ? '#' : ' ';
 steps(n, row, stair + add);
 // console.log('partfinish');
 return;
}

steps(3);

module.exports = steps;


/*function steps(n) {
    for(let i = 0; i < n; i++) {
        const element = new Array(n);
        element.fill('#', 0, i + 1);
        element.fill(' ', i + 1);
        console.log(element.join(''));
    }
}*/

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }