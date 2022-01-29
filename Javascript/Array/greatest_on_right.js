//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

var replaceElements = function (arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            ans.push(-1);
        } else {
            let temp = arr.slice(i + 1, arr.length);
            ans.push(Math.max(...temp));
        }
    }
    return ans;
};

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
