// https://leetcode.com/problems/subarray-product-less-than-k/
function numSubarrayProductLessThanK(nums: number[], k: number): number {

    let count = 0;

    let N = nums.length;

    let idx_r = 0;
    let idx_l = 0;
    let product = 1;

    while (idx_l < N) {

        if (nums[idx_l] >= k) {
            idx_l++;
            idx_r = idx_l;
            continue;
        }

        product *= nums[idx_l];

        while (product >= k) {
            product /= nums[idx_r];
            idx_r++;
        }

        count += (idx_l - idx_r + 1);
        idx_l++;
    }

    return count;
}