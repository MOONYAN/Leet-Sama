// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function findDisappearedNumbers(nums: number[]): number[] {
    let hash = new Set<number>();
    nums.forEach(e=>hash.add(e));
    let result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!hash.has(i)) {
            result.push(i);
        }
    }
    return result;
}