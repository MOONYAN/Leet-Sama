// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let result:number = 0;
    nums.forEach(e=>result^=e);
    return result;
}