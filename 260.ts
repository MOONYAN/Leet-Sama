// https://leetcode.com/problems/single-number-iii/
function singleNumber(nums: number[]): number[] {

    const x = nums.reduce((p, v) => p ^ v, 0);

    // lowbit
    const diff = x & -x;

    let ans = [0, 0];

    nums.forEach(n => {
        if ((n & diff) === 0) {
            ans[1] ^= n;
        } else {
            ans[0] ^= n;
        }
    })

    return ans;
}