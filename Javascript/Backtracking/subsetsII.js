//https://leetcode.com/problems/subsets-ii/submissions/

var subsetsWithDup = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const subsets = [];
    let sub = [];
    function dfs(idx) {
        if (idx >= nums.length) {
            subsets.push([...sub]);
            return;
        } else {
            sub.push(nums[idx]);
            dfs(idx + 1);

            sub.pop();
            while (idx + 1 < nums.length && nums[idx] == nums[idx + 1]) {
                idx++;
            }
            dfs(idx + 1);
        }
    }
    dfs(0);
    return subsets;
};

//Sort the array to get increasingly duplicates
//when not taking case happens, skip all the next values having same value of taken
//rest same as subsets I.
