// https://leetcode.com/problems/house-robber/
function rob(nums: number[]): number {

    const N: number = nums.length;

    if (N <= 2) {
        return Math.max(...nums);
    }

    // maximum value at house i
    let dp: number[] = Array(N).fill(0);

    dp[0] = nums[0];

    dp[1] = Math.max(dp[0], nums[1]);

    for (let i = 2; i < N; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[N - 1];
}