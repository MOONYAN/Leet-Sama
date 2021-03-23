// https://leetcode.com/problems/missing-number/
function missingNumber(nums: number[]): number {

    const N = nums.length;

    let answer = 0;

    for (let i = 0; i <= N; i++) {
        answer ^= i;
    }

    return nums.reduce((p, v) => p ^ v, answer);
}

// function missingNumber(nums: number[]): number {

//     const N = nums.length;

//     let answer = 0;

//     for (let i = 0; i <= N; i++) {
//         answer ^= i;
//     }

//     nums.forEach(n => answer ^= n);

//     return answer;
// }