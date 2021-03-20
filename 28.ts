// https://leetcode.com/problems/implement-strstr/
function strStr(haystack: string, needle: string): number {

    if (needle === '') {
        return 0;
    }

    const N = haystack.length;
    const M = needle.length;

    if (M > N) {
        return -1;
    }

    for (let i = 0; i <= N - M; i++) {

        for (let j = 0; (j < M) && (haystack[i + j] === needle[j]); j++) {
            if (j === M - 1) {
                return i;
            }
        }
    }

    return -1;
}