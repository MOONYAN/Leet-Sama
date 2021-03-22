// https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {

    let result = [];

    let idx_r = 0, idx_l = nums.length - 1;

    while (idx_r <= idx_l) {

        const r = nums[idx_r] ** 2;
        const l = nums[idx_l] ** 2;

        if (l > r) {
            result.push(l);
            idx_l--;
        } else {
            result.push(r);
            idx_r++;
        }
    }

    return result.reverse();
}