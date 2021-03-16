// https://leetcode.com/problems/minimum-cost-for-tickets/
function mincostTickets(days: number[], costs: number[]): number {

    const N = days[days.length - 1];

    let mark: boolean[] = Array(N + 1).fill(false);

    days.forEach(d => mark[d] = true);

    //minimum cost at day i
    let dp: number[] = [0];

    for (let i = 1; i <= N; i++) {
        if (mark[i]) {
            let t1 = dp[Math.max(0, i - 1)] + costs[0];
            let t7 = dp[Math.max(0, i - 7)] + costs[1];
            let t30 = dp[Math.max(0, i - 30)] + costs[2];
            dp[i] = Math.min(t1, t7, t30);
        } else {
            dp[i] = dp[i - 1];
        }
    }

    return dp[N];
}