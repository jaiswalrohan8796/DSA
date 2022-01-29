//https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/

var kthDistinct = function (arr, k) {
    let counts = {};
    for (let char of arr) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    let ans = [];
    for (let [key, value] of Object.entries(counts)) {
        if (value == 1) {
            ans.push(key);
        }
    }
    console.log(ans);
    if (ans.length < k) return "";
    return ans[k - 1];
};

/*
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned.  
*/
