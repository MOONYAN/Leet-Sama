// https://leetcode.com/problems/kth-largest-element-in-a-stream/
class KthLargest {

    private heap: number[];
    private size: number;
    private counter: number = 0;

    constructor(private k: number, nums: number[]) {
        // idx 1 ~ k+1;
        this.size = k + 1;
        this.heap = Array(this.size + 1);
        nums.forEach(e => this.add(e));
    }

    add(val: number): number {

        if (this.isFull() && val <= this.peek()) {
            return this.peek();
        }

        this.push(val);
        if (this.isOverSize()) {
            this.pop();
        }
        return this.peek();
    }

    private isFull(): boolean {
        return this.counter === this.size - 1;
    }

    private isOverSize(): boolean {
        return this.counter === this.size;
    }

    private pop(): number {
        const root = this.heap[1];
        this.heapify();
        return root;
    }

    private peek(): number {
        return this.heap[1];
    }

    private push(val: number) {
        this.counter++;
        this.heap[this.counter] = val;
        this.buttonUp();
    }

    private buttonUp() {

        let heap = this.heap;

        for (let idx = this.counter; idx > 1; idx >>>= 1) {
            const parent = idx >>> 1;
            if (heap[idx] < heap[parent]) {
                [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
            } else {
                return;
            }
        }
    }

    private heapify() {
        let heap = this.heap;
        heap[1] = heap[this.counter];
        this.counter--;

        for (let idx = 1; ;) {

            const left = idx * 2;
            const right = left + 1;

            let min = [left, right].reduce((p, v) => (v <= this.counter && heap[v] < heap[p]) ? v : p, idx);

            if (min != idx) {
                [heap[idx], heap[min]] = [heap[min], heap[idx]];
                idx = min;
            } else {
                return;
            }
        }
    }
}