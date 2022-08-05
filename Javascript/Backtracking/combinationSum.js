//https://leetcode.com/problems/combination-sum/submissions/

var combinationSum = function (candidates, target) {
    let path = [];
    let res = [];

    function DFS(index) {
        if (target < 0) return;
        if (target == 0) {
            res.push([...path]);
        }
        while (candidates[index]) {
            target -= candidates[index];
            path.push(candidates[index]);
            DFS(index);

            //revert back if it exceeds limit
            target += candidates[index];
            path.pop();

            //increment index
            index++;
        }
    }
    DFS(0);
    return res;
};



//https://leetcode.com/problems/combination-sum-ii/discuss/16878/Combination-Sum-I-II-and-III-Java-solution-(see-the-similarities-yourself)

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
