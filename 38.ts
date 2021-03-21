// https://leetcode.com/problems/count-and-say/
function countAndSay(n: number): string {

    if (n === 1) {
        return '1';
    }

    const str = countAndSay(n - 1);

    const pattern = /1+|2+|3+|4+|5+|6+|7+|8+|9+|0+/g

    return str.replace(pattern, s => `${s.length}${s[0]}`)
}