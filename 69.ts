// https://leetcode.com/problems/sqrtx/

// y = f(x) = x**2
function mySqrt(y: number): number {

    // g(x) = x**2 - y
    // g'(x) = 2x
    // newton(x) = x - (g(x)/g'(x)) = x/2 + y/2x = (x+y/x)/2

    function newton(x: number): number {
        return (x + y / x) / 2;
    }

    if (y === 0) {
        return 0;
    }

    let last = y;
    let current = newton(last);
    while (last - current >= 1) {
        last = current;
        current = newton(last);
    }
    return Math.floor(current);
}

// function mySqrt(x: number): number {

//     if (x === 0) {
//         return 0;
//     }

//     let up = 1 << 16;
//     let low = 0;

//     while (up - low > 1) {
//         let mid = (up + low) >>> 1;

//         if (mid ** 2 <= x) {
//             low = mid;
//         } else {
//             up = mid;
//         }
//     }
//     return low;
// }