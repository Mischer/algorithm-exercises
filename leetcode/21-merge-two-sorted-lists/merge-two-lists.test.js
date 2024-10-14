const { mergeTwoLists, ListNode } = require('./merge-two-lists');

function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

describe('mergeTwoLists', () => {
    test('Merging two non-empty sorted lists', () => {
        const list1 = arrayToList([1, 2, 4]);
        const list2 = arrayToList([1, 3, 4]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test('Merging an empty list with a non-empty list', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([0]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([0]);
    });

    test('Merging two empty lists', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([]);
    });

    test('Merging an empty list and a sorted list', () => {
        const list1 = arrayToList([1, 3, 5]);
        const list2 = arrayToList([]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 3, 5]);
    });

    test('Merging two sorted lists of the same length', () => {
        const list1 = arrayToList([1, 3, 5]);
        const list2 = arrayToList([2, 4, 6]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Merging two lists with identical elements', () => {
        const list1 = arrayToList([2, 2, 2]);
        const list2 = arrayToList([2, 2, 2]);

        const mergedList = mergeTwoLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([2, 2, 2, 2, 2, 2]);
    });
});