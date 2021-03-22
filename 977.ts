// https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {

    const N = nums.length;

    nums = nums.map(n => n ** 2);

    let result = Array(N).fill(0);

    for (let idx_r = 0, idx_l = N - 1, i = N - 1; i >= 0; i--) {

        const r = nums[idx_r];
        const l = nums[idx_l];

        if (l > r) {
            result[i] = l;
            idx_l--;
        } else {
            result[i] = r;
            idx_r++;
        }
    }
    return result;
}