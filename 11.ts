// https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j; (height[i] < height[j]) ? i++ : j--) {
        let product = Math.min(height[i], height[j]) * (j - i);
        max = Math.max(max, product);
    }
    return max;
};