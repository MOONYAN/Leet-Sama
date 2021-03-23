// https://leetcode.com/problems/number-complement/submissions/
function findComplement(num: number): number {

    let x = 1;

    while (x < num) {
        x = x * 2 + 1;
    }

    return x ^ num;
}