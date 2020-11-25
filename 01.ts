// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    const len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j];
            }
        }
    }
    return [];
};