// https://leetcode.com/problems/3sum/
function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    let output: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0, hashi = new Set<number>(); i < len - 2 && nums[i] <= 0; i++) {
        if (hashi.has(nums[i]))
            continue;
        for (let j = i + 1, hashj = new Set<number>(), hashk = new Set<number>(); j < len; j++) {
            const rest = -(nums[i] + nums[j]);
            if (hashj.has(rest) && !hashk.has(rest)) {
                output.push([nums[i], rest, nums[j]])
                hashk.add(rest);
            }
            hashj.add(nums[j]);
        }
        hashi.add(nums[i]);
    }
    return output;
};