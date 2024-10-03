/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let current = null;
    let carry = 0;

    while(l1 || l2 || carry !== 0) {
        let val1 = l1?.val || 0;
        let val2 = l2?.val || 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        const newNode = new ListNode(sum % 10);

        if (head === null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode; // set the next
            current = current.next; // move current to new node
        }

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return head;
};

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    let head = null;
    let current = null;

    for (let i = 0; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        if (head === null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }

    return head;
}

function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

function runTests() {
    const tests = [
        { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },  // 342 + 465 = 807
        { l1: [0], l2: [0], expected: [0] },                    // 0 + 0 = 0
        { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] }, // 9999999 + 9999 = 10009998
        { l1: [1], l2: [9, 9, 9], expected: [0, 0, 0, 1] }       // 1 + 999 = 1000
    ];

    tests.forEach((test, index) => {
        const l1 = arrayToList(test.l1);
        const l2 = arrayToList(test.l2);
        const result = addTwoNumbers(l1, l2);
        const resultArray = listToArray(result);

        console.log(`Test ${index + 1}: `, resultArray);
        console.assert(JSON.stringify(resultArray) === JSON.stringify(test.expected), `Test ${index + 1} failed`);
    });

    console.log('All tests passed!');
}

runTests();