// https://leetcode.com/problems/wiggle-subsequence/
function wiggleMaxLength(nums: number[]): number {

    const N = nums.length;

    if (N <= 2) {
        return 1;
    }

    // miximum length in [0:i]
    let dp: number[] = Array(N).fill(1);

    let trend: number[] = Array(N).fill(0);

    for (let i = 1; i < N; i++) {

        if (nums[i] > nums[i - 1] && trend[i - 1] != 1) {
            trend[i] = 1;
            dp[i] = dp[i - 1] + 1;
            continue;
        }
        if (nums[i] < nums[i - 1] && trend[i - 1] != -1) {
            trend[i] = -1;
            dp[i] = dp[i - 1] + 1
            continue;
        }
        dp[i] = dp[i - 1];
        trend[i] = trend[i - 1];
    }

    return dp[N - 1];
}