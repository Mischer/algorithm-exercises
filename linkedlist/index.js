// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;

        while(node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previousNode;
        let node = this.head;

        while(node.next) {
            previousNode = node;
            node = node.next;
        }

        previousNode.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();
        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while(index && node) {
            index--;
            node = node.next;
        }
        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index - 1);
        if (!previousNode || !previousNode.next) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previousNode = this.getAt(index - 1) || this.getLast();
        previousNode.next = new Node(data, previousNode.next);
    }

    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
