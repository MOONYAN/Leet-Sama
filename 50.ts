// https://leetcode.com/problems/powx-n/
function myPow(x: number, n: number): number {

    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let product = 1;

    while (n > 0) {
        if (n & 1) {
            product *= x;
        }
        n >>>= 1;
        x *= x;
    }

    return product;
}