//https://leetcode.com/problems/build-an-array-with-stack-operations/

var buildArray = function (target, n) {
    let ans = [];
    let array = Array.from({ length: n }, (_, i) => i + 1);
    if (target.length == 0) {
        return ans;
    } else {
        for (let i = 0; i < target.length; i++) {
            if (target[i] == array[i]) {
                ans.push("Push");
            } else if (target[i] > array[i]) {
                let diff = target[i] - array[i];
                let d = diff;
                while (diff--) {
                    ans.push("Push");
                }
                while (d--) {
                    ans.push("Pop");
                }
                ans.push("Push");
            }
        }
        return ans;
    }
};

// Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation:
// Read number 1 and automatically push in the array -> [1]
// Read number 2 and automatically push in the array then Pop it -> [1]
// Read number 3 and automatically push in the array -> [1,3]
