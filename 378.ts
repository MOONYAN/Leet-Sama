
// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
function firstUniqChar(s: string): number {

    let counter: number[] = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (counter[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }

    return -1;
}