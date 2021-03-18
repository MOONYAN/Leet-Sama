import { ListNode } from "./shared/list-node";

function help(head: ListNode | null, matchPoint: ListNode | null): ListNode | null {
    let searcher: ListNode | null = head;

    while (searcher != matchPoint) {
        searcher = searcher!.next;
        matchPoint = matchPoint!.next;
    }

    return searcher;
}

function detectCycle(head: ListNode | null): ListNode | null {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow!.next;
        if (fast === slow) {
            return help(head, slow);
        }
    }

    return null;
}