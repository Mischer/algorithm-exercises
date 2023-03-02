// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(child => child.data!== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const list = [this.root];

        while (list.length) {
            const node = list.shift();
            fn(node);
            list.push(...node.children);
        }
    }

    traverseDF(fn)  {
        const stack = [this.root];

        while (stack.length) {
            const node = stack.shift();
            fn(node);
            stack.unshift(...node.children);
        }
    }
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.traverseBF(node => {
    letters.push(node.data);
});

// expect(letters).toEqual(['a', 'b', 'c', 'd']);

module.exports = { Tree, Node };
