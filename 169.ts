// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let hash: { [key: number]: number } = {};
    for (let e of nums) {
        hash[e] = (hash[e] === undefined) ? 1 : hash[e] + 1;
        if (hash[e] > nums.length / 2) {
            return e;
        }
    }
    return Number.MIN_SAFE_INTEGER;
}