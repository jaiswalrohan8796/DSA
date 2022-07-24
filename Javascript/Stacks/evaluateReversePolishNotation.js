//https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/

var evalRPN = function(tokens) {
    let stack = []
    for(let char of tokens) {
        if(char == "+") {
            stack.push(stack.pop() + stack.pop())
        }
        else if(char == "-") {
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b - a)
        }
        else if(char == "*") {
            stack.push(stack.pop() * stack.pop())
        }
        else if(char == "/") {
            stack.push(Math.trunc((1/stack.pop())*stack.pop()))
        }
        else {
            stack.push(parseInt(char))
        }
    }
    return stack[0]
};

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
