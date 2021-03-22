// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {

    if (strs.length < 1) {
        return '';
    }

    // minimum string length
    const M = Math.min(...strs.map(s => s.length));

    let idx = 0;

    for (; idx < M; idx++) {

        let mark: Set<string> = new Set();

        strs.forEach(s => mark.add(s[idx]));

        if (mark.size != 1) {
            return strs[0].slice(0, idx);
        }
    }

    return strs[0].slice(0, idx);
}