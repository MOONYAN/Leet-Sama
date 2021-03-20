// https://leetcode.com/problems/string-to-integer-atoi/
function help(a: string): number {

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum *= 10;
        sum += (a.charCodeAt(i) - 48);
    }
    return sum;
}

function myAtoi(s: string): number {

    s = s.trim();

    const pattern = /^(\+|-)?\d+/;

    const regMatch = s.match(pattern);

    if (regMatch === null) {
        return 0;
    }

    const a = regMatch[0];

    if (a[0] === '-') {
        return Math.max(-help(a.slice(1)), -2147483648)
    } else if (a[0] === '+') {
        return Math.min(help(a.slice(1)), 2147483647);
    } else {
        return Math.min(help(a), 2147483647);
    }
}