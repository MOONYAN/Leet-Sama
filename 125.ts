// https://leetcode.com/problems/valid-palindrome/
function isPalindrome(s: string): boolean {
    s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) {
            return false;
        }
    }

    return true;
}