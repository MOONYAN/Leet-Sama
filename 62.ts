// https://leetcode.com/problems/unique-paths/
function factorial(x: number): number[] {
    let output: number[] = [1];
    for (let i = 1, product = 1; i <= x; i++) {
        product *= i;
        output.push(product);
    }
    return output;
}

function uniquePaths(m: number, n: number): number {
    const x = m - 1, y = n - 1;
    const factorials = factorial(x + y);
    return factorials[x+y] / (factorials[x] * factorials[y]);
};