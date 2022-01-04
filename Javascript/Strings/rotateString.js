//https://leetcode.com/problems/rotate-string/submissions/

var rotateString = function (s, goal) {
    let n = s.length;
    let temp = s.split("");
    while (n--) {
        let f = temp.splice(0, 1);
        temp.push(f);
        if (temp.join("") == goal) {
            return true;
        }
    }
    return false;
};

// Input: s = "abcde", goal = "cdeab"
// Output: true
