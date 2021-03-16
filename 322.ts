// https://leetcode.com/problems/coin-change/

function coinChange(coins: number[], amount: number): number {

    let dp: number[] = Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;

    coins.forEach(c => {
        for (let i = c; i <= amount; i++) {
            dp[i] = Math.min(dp[i - c] + 1, dp[i]);
        }
    })

    return (dp[amount] != Number.MAX_VALUE) ? dp[amount] : -1;
}

// function coinChange(coins: number[], amount: number): number {
//     if (amount === 0)
//         return 0;
//     coins.sort((a, b) => b - a);
//     let dp: number[] = [0];
//     for (let i = 1; i <= amount; i++) {
//         let vals: number[] = coins.filter(c=>i>=c && dp[i-c]!==undefined).map(c=>dp[i-c]+1);
//         if(vals.length>0){
//             dp[i] = Math.min(...vals);
//         }        
//     }
//     return (dp[amount] === undefined) ? -1 : dp[amount];
// };