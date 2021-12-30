//https://leetcode.com/problems/add-strings/submissions/

var addStrings = function(num1, num2) {
    let n1 = BigInt(num1)
    let n2 = BigInt(num2)
    let ans = BigInt(n1 + n2)
    ans = String(ans)
    return ans.slice(0,ans.length)
};

// Input: num1 = "456", num2 = "77"
// Output: "533"