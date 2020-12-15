// https://leetcode.com/problems/reverse-linked-list/

import { ListNode } from "./shared/list-node";

function reverseList(head: ListNode | null): ListNode | null {

    if(head === null){
        return null;
    }

    let list = [];

    for (let node:ListNode | null = head; node != null; node = node ? node.next : null) {
        list.push(node);
    }
    for (let i = 1; i < list.length; i++) {
        list[i].next = list[i-1];
    }
    list[0].next=null;

    return list[list.length - 1];
}