// https://leetcode.com/problems/partition-labels/
class Segment {
    start: number = 0;
    end: number = 0;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }

    getLength(): number {
        return this.end - this.start + 1;
    }
}

function partitionLabels(S: string): number[] {

    let hash: { [key: string]: Segment } = {};
    let list: string[] = [];

    for (let i = 0; i < S.length; i++) {
        const c = S[i];
        if (hash[c] === undefined) {
            hash[c] = new Segment(i, i);
            list.push(c);
        } else {
            hash[c].end = i;
        }
    }

    let output: number[] = [];
    let now: Segment | null = null;
    for (let c of list) {
        const seg = hash[c];
        if (now === null) {
            now = new Segment(seg.start, seg.end);
            continue;
        }
        if (seg.start > now.end) {
            output.push(now.getLength());
            now = new Segment(seg.start, seg.end);
        } else {
            now.end = Math.max(now.end, seg.end);
        }
    }
    if (now !== null) {
        output.push(now.getLength());
    }
    return output;
};