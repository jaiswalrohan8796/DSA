//https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/

//TLE
var numSubseq = function (nums, target) {
    nums.sort((a, b) => a - b);
    let minn = Infinity;
    let maxx = -Infinity;
    let count = 0;

    function backtrack(idx, ds, minn, maxx) {
        if (ds.length != 0 && minn + maxx <= target) {
            count++;
        } else if (minn + maxx > target || idx >= nums.length) {
            return;
        }
        for (let i = idx; i < nums.length; i++) {
            let old_min = minn;
            let old_maxx = maxx;
            minn = Math.min(minn, nums[i]);
            maxx = Math.max(maxx, nums[i]);
            if (minn + maxx > target) {
                minn = old_min;
                maxx = old_maxx;
                continue;
            }
            ds.push(nums[i]);
            backtrack(i + 1, ds, minn, maxx);
            minn = old_min;
            maxx = old_maxx;
            ds.pop();
        }
    }
    backtrack(0, [], minn, maxx);
    //console.log(count)
    return count;
};

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
