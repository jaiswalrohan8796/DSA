//https://leetcode.com/problems/number-of-segments-in-a-string/submissions/

var countSegments = function (s) {
    if (s.length == 0) {
        return 0;
    }
    let ans = s.split(" ");
    ans = ans.filter((word) => {
        if (!word.includes(" ")) {
            return word;
        }
    });
    return ans.length;
};

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
