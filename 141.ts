// https://leetcode.com/problems/linked-list-cycle/
import { ListNode } from "./shared/list-node";

function hasCycle(head: ListNode | null): boolean {

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow!.next;
        if (fast === slow) {
            return true;
        }
    }

    return false;
}