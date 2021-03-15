// https://leetcode.com/problems/sqrtx/
function mySqrt(x: number): number {

    if (x === 0) {
        return 0;
    }

    let up = 1 << 16;
    let low = 0;

    while (up - low > 1) {
        let mid = (up + low) >>> 1;

        if (mid ** 2 <= x) {
            low = mid;
        } else {
            up = mid;
        }
    }
    return low;
}