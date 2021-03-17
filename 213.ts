// https://leetcode.com/problems/house-robber-ii/
function help(nums: number[]) {
    const N: number = nums.length;

    // maximum value at house i
    let dp: number[] = Array(N).fill(0);

    dp[0] = nums[0];

    dp[1] = Math.max(dp[0], nums[1]);

    for (let i = 2; i < N; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[N - 1];
}

function rob(nums: number[]): number {

    if (nums.length <= 3) {
        return Math.max(...nums);
    }

    let Q1 = help(nums.slice(0, -1));
    let Q2 = help(nums.slice(1));

    return Math.max(Q1, Q2);
}