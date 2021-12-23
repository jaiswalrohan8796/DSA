//https://leetcode.com/problems/goal-parser-interpretation/submissions/

var interpret = function(command) {
    let ans = ""
    let idx = 0
    while( idx < command.length) {
        if (command[idx] == 'G') {
            ans += "G"
            idx += 1
        }
        else if (command[idx] == "(" && command[idx + 1] == ")") {
            ans+= "o"
            idx += 2
        }
        else if (command[idx] == '(' && command[idx+1] == "a" && command[idx+2] == "l" && command[idx+3] == ")") {
            ans += "al"
            idx += 4
        }
    }
    return ans
};

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".