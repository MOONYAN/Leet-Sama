// https://leetcode.com/problems/k-closest-points-to-origin/
class MaxHeap<T> {

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
            let max = [left, right].reduce((p, v) => (v <= this.counter && this.compare(heap[p], heap[v])) ? v : p, idx);

            if (max != idx) {
                [heap[idx], heap[max]] = [heap[max], heap[idx]];
                idx = max;
            } else {
                return;
            }
        }
    }
}

class Point {

    readonly distance: number;

    constructor(readonly pair: number[]) {
        const [x, y] = pair;
        this.distance = x ** 2 + y ** 2;
    }
}

function kClosest(points: number[][], k: number): number[][] {

    let maxheap = new MaxHeap<Point>(k, (p1, p2) => p2.distance - p1.distance > 0);

    points.forEach(p => maxheap.add(new Point(p)));

    let result: number[][] = [];

    for (let i = 0; i < k; i++) {
        result.push(maxheap.pop().pair);
    }

    return result;
}