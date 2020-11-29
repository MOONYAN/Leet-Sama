// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
function maxProfit(prices: number[]): number {
    let max = 0;
    let float = 0;
    for (let i = 1; i < prices.length; i++) {
        const step = prices[i] - prices[i - 1];
        float += step;
        float = Math.max(float, 0);
        max = Math.max(max, float);
    }
    return max;
};