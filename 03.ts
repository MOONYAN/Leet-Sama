// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let hash: { [key: string]: number } = {};
    let from = 0;
    let max = 0;
    for (let to = 0; to < s.length; to++) {
        const c = s[to];
        const idx = hash[c];
        if (idx !== undefined && idx >= from) {
            from = idx + 1;
        }
        hash[c] = to;
        max = Math.max(max, to - from + 1);
    }
    return max;
};