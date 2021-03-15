// https://leetcode.com/problems/super-pow/
function help(x: number, n: number): number {

    if (n === 0) {
        return 1;
    }

    x %= 1337;
    let product = 1;

    while (n > 0) {
        if (n & 1) {
            product = (product * x) % 1337;
        }
        n >>>= 1;
        x = (x * x) % 1337;
    }

    return product;
}

function superPow(a: number, b: number[]): number {

    a %= 1337;
    let product = 1;

    for (let i = 0; i < b.length; i++) {
        product = help(product, 10);
        product = (product * help(a, b[i])) % 1337;
    }

    return product;
}