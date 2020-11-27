// https://leetcode.com/problems/climbing-stairs/submissions/
function climbStairs(n: number): number {
    let fibonacci: number[] = [1, 2];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[n - 1];
};