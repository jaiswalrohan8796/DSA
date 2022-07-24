//https://leetcode.com/problems/longest-consecutive-sequence/submissions/

function longestConsecutive(nums) {
    if (nums == null || nums.length === 0) return 0;

    const set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence

        let currNum = num;
        let currMax = 1;

        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }

    return max;
}

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
