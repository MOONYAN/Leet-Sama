// https://leetcode.com/problems/add-two-numbers/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function fulladder(v1: ListNode | null, v2: ListNode | null, carry: number) {
    if (!(v1 || v2)) {
        return (carry > 0) ? new ListNode(carry) : null;
    }
    let sum = (v1 ? v1.val : 0) + (v2 ? v2.val : 0) + carry;
    let node = new ListNode(sum % 10);
    node.next = fulladder((v1 ? v1.next : null), (v2 ? v2.next : null), Math.floor(sum / 10));
    return node;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return fulladder(l1, l2, 0);
};