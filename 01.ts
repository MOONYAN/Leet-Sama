// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {

    const N = nums.length;

    let map: { [key: number]: number } = {};

    for (let i = 0; i < N; i++) {

        const idx = map[target - nums[i]];

        if (idx !== undefined) {
            return [idx, i];
        }

        map[nums[i]] = i;
    }
    return [];
}