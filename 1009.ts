// https://leetcode.com/problems/complement-of-base-10-integer/
function bitwiseComplement(N: number): number {

    let x = 1;

    while (x < N) {
        x = x * 2 + 1;
    }

    return x ^ N;
}