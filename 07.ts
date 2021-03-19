// https://leetcode.com/problems/reverse-integer/
function help(x: number): number {
    let y = 0;
    while (x > 0) {
        y *= 10;
        y += x % 10;
        x = Math.floor(x / 10);
    }
    return y;
}

function reverse(x: number): number {

    let y = 0;

    const upperbound = -2147483648;
    const lowerbound = 2147483647;

    if (x < 0) {
        y = -help(-x);
    } else {
        y = help(x);
    }

    if (y < lowerbound || y > upperbound) {
        return 0;
    }

    return y;
}