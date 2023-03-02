// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require("./node");

function levelWidth(root) {
    const result = [0];
    const queue = [root, 's'];

    while (queue.length > 1) {
        const node = queue.shift();
        if (node === 's') {
            result.push(0);
            queue.push(node);
        } else {
            queue.push(...node.children);
            result[result.length - 1]++;
        }
    }

    return result;
}

const root = new Node(0);
root.add(1);
root.children[0].add(2);
root.children[0].add(3);
root.children[0].children[0].add(4);

levelWidth(root);

module.exports = levelWidth;
