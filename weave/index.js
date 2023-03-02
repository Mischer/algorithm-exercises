// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const result = new Queue();
    const maxLength = Math.max(sourceOne.data.length, sourceTwo.data.length);
    if (!maxLength) {
        return result;
    }

    for (let i = 0; i < maxLength; i++) {
        if (sourceOne.data.length > 0) {
            result.add(sourceOne.peek());
            sourceOne.remove();
        }

        if (sourceTwo.data.length > 0) {
            result.add(sourceTwo.peek());
            sourceTwo.remove();
        }
    }

    return result;
}

/*const one = new Queue();
one.add(1);
one.add(2);
one.add(3);
one.add(4);
const two = new Queue();
two.add('one');
two.add('two');
two.add('three');
two.add('four');

weave(one, two);*/


module.exports = weave;
