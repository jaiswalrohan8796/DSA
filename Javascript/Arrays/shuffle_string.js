//https://leetcode.com/problems/shuffle-string/submissions/

var restoreString = function(s, indices) {
    let ans = new Array(indices.length)
    for(let i = 0;i < indices.length; i++) {
        ans[indices[i]] = s[i]
    }
    return ans.join('')
};

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.