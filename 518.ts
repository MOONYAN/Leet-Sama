// https://leetcode.com/problems/coin-change-2/submissions/
function change(amount: number, coins: number[]): number {

    //sum of way to amount i
    let dp: number[] = Array(amount + 1).fill(0);
    dp[0] = 1;

    coins.forEach(c => {
        for (let i = c; i <= amount; i++) {
            dp[i] += dp[i - c];
        }
    });

    return dp[amount];
}