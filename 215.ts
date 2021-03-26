// https://leetcode.com/problems/kth-largest-element-in-an-array/
class MinHeap215 {

    private heap: number[];
    private counter = 0;

    constructor(private size: number) {
        this.heap = Array(size + 1);
    }

    push(value: number) {
        this.counter++;
        this.heap[this.counter] = value;
        this.buttonUp();
    }

    pop(): number {
        const root = this.heap[1];
        this.heapify();
        return root;
    }

    peek(): number {
        return this.heap[1];
    }

    isFull(): boolean {
        return this.counter === this.size;
    }

    isEmpty(): boolean {
        return this.counter === 0;
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
            let min = idx;

            if (left <= this.counter && heap[left] < heap[min]) {
                min = left;
            }

            if (right <= this.counter && heap[right] < heap[min]) {
                min = right;
            }

            if (min != idx) {
                [heap[idx], heap[min]] = [heap[min], heap[idx]];
                idx = min;
            } else {
                return;
            }
        }
    }
}

function findKthLargest(nums: number[], k: number): number {

    let heap = new MinHeap215(k + 1);

    nums.forEach(v => {
        heap.push(v);
        if (heap.isFull()) {
            heap.pop();
        }
    })

    return heap.peek();
}