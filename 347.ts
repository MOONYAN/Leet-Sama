// https://leetcode.com/problems/top-k-frequent-elements/
class MinHeap<T> {

    private heap: T[];

    private size: number;

    private counter = 0;

    constructor(k: number, private compare: (a: T, b: T) => boolean) {
        this.size = k + 1;
        this.heap = Array(this.size + 1);
    }

    private isFull(): boolean {
        return this.counter === this.size - 1;
    }

    private isOverSize(): boolean {
        return this.counter === this.size;
    }

    add(val: T) {
        if (this.isFull() && this.compare(this.peek(), val)) {
            return;
        }

        this.push(val);
        if (this.isOverSize()) {
            this.pop();
        }
    }

    private peek(): T {
        return this.heap[1];
    }

    private push(val: T) {
        this.counter++;
        this.heap[this.counter] = val;
        this.buttonUp();
    }

    buttonUp() {
        let heap = this.heap;
        for (let idx = this.counter; idx > 1; idx >>>= 1) {
            const parent = idx >>> 1;
            if (this.compare(heap[parent], heap[idx])) {
                [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
            } else {
                return;
            }
        }
    }

    pop(): T {
        const root = this.heap[1];
        this.heapify();
        return root;
    }

    heapify() {
        let heap = this.heap;
        heap[1] = heap[this.counter];
        this.counter--;

        for (let idx = 1; ;) {
            const left = idx * 2;
            const right = left + 1;
            let min = [left, right].reduce((p, v) => (v <= this.counter && this.compare(heap[p], heap[v])) ? v : p, idx);

            if (min != idx) {
                [heap[idx], heap[min]] = [heap[min], heap[idx]];
                idx = min;
            } else {
                return;
            }
        }
    }
}

function topKFrequent(nums: number[], k: number): number[] {

    let freqMap: Map<number, number> = new Map<number, number>();

    nums.forEach(e => {
        const count: number | undefined = freqMap.get(e);
        freqMap.set(e, (count !== undefined) ? count + 1 : 1);
    })
    let minheap = new MinHeap<number[]>(k, (a, b) => a[1] - b[1] > 0);

    for(const pair of freqMap){
        minheap.add(pair);
    }

    let result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(minheap.pop()[0])
    }

    return result;
}