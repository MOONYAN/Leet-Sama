function twoSum(numbers: number[], target: number): number[] {

    for (let idx_r = 0, idx_l = numbers.length - 1; idx_r < idx_l;) {

        const sum = numbers[idx_r] + numbers[idx_l];

        if (sum === target) {
            return [idx_r + 1, idx_l + 1];
        }
        (sum > target) ? idx_l-- : idx_r++;
    }

    return [];
}