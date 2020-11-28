// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
const dic: { [key: string]: string[] } = {
    2: ['a', 'b', 'c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
}

function letterCombinations(digits: string): string[] {
    let output: string[] = [];
    function generate(d: string, s: string) {
        if (d.length === 0) {
            if (s.length > 0) {
                output.push(s);
            }
            return;
        }
        for (let c of dic[d[0]]) {
            generate(d.substring(1), `${s}${c}`);
        }
    }
    generate(digits, '');
    return output;
};