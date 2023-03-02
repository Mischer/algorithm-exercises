// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
    while (result.length < n) {
        result.push(new Array(n));
    }
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let column = startColumn; column <= endColumn; column++) {
            result[startRow][column] = counter;
            counter++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result[row][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for (let column = endColumn; column >= startColumn; column--) {
            result[endRow][column] = counter;
            counter++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            result[row][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return result;
}

module.exports = matrix;
