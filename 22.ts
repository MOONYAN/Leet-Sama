// https://leetcode.com/problems/generate-parentheses/
function generateParenthesis(n: number): string[] {
    let output: string[] = [];
    function generate(s: string, left: number, right: number) {
        if (left === 0 && right === 0) {
            output.push(s);
            return
        }
        if (left > 0) {
            generate(`${s}(`, left - 1, right);
        }
        if (left < right) {
            generate(`${s})`, left, right - 1);
        }
    }
    generate('', n, n);
    return output;
};