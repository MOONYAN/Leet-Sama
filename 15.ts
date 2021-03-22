// https://leetcode.com/problems/3sum/

function help(nums: number[], target: number, start: number): number[][] {

    const N = nums.length;

    let output: number[][] = [];

    let idx_r = start;
    let idx_l = N - 1;

    while (idx_r < idx_l) {
        const sum = nums[idx_r] + nums[idx_l];
        if (target + sum === 0) {
            output.push([target, nums[idx_r], nums[idx_l]]);
            idx_l--;
            idx_r++;
            while (nums[idx_l] === nums[idx_l + 1]) { idx_l--; }
            while (nums[idx_r] === nums[idx_r - 1]) { idx_r++; }
        } else {
            (sum > -target) ? idx_l-- : idx_r++;
        }
    }

    return output;
}

function threeSum(nums: number[]): number[][] {

    const N = nums.length;

    let output: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0, hashi = new Set<number>(); i < N - 2 && nums[i] <= 0; i++) {

        const target = nums[i];

        if (hashi.has(target))
            continue;

        output.push(...help(nums, target, i + 1));

        hashi.add(nums[i]);
    }
    return output;
}