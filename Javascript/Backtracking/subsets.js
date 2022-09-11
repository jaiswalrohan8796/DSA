//https://leetcode.com/problems/subsets/

// power set approach
var subsets = function (nums) {
    function backtrack(start, temp, res) {
        res.push([...temp]);
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
            backtrack(i + 1, temp, res);
            temp.pop();
        }
    }
    let res = [];
    backtrack(0, [], res);
    return res;
};

//take, not take approach
var subsets = function (nums) {
    const subsets = [];
    let sub = [];
    function dfs(idx) {
        if (idx >= nums.length) {
            subsets.push([...sub]);
            return;
        }
        sub.push(nums[idx]);
        dfs(idx + 1);

        sub.pop();
        dfs(idx + 1);
    }

    dfs(0);
    return subsets;
};

//Take & Not Take approach
//IMP : - Make sure to push the copy of build subsets, to avoid pass by reference.

var subsets = function (nums) {
    function backTrack(start, curr) {
        subsets.push(curr);
        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i]);
            backTrack(i + 1, curr);
            curr.pop();
        }
    }
    const subsets = [];
    backTrack(0, []);
    return subsets;
};
