//https://leetcode.com/problems/robot-return-to-origin/submissions/

var judgeCircle = function (moves) {
    let [left, right, up, down] = [0, 0, 0, 0];
    for (let char of moves) {
        if (char == "L") {
            left++;
        } else if (char == "R") {
            right++;
        } else if (char == "U") {
            up++;
        } else if (char == "D") {
            down++;
        }
    }
    if (left - right == 0 && up - down == 0) {
        return true;
    }
    return false;
};

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
