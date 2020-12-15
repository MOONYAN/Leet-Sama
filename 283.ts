// https://leetcode.com/problems/move-zeroes/submissions/

function moveZeroes(nums: number[]): void {
    for (let i = 0, idx = 0; idx < nums.length; i++, idx++) {
        if (nums[i] === 0) {
            while (nums[idx] === 0) {
                idx++;
            } if (idx < nums.length) {
                nums[i] = nums[idx];
                nums[idx] = 0;
            }
        }
    }
}