//https://practice.geeksforgeeks.org/problems/infix-to-postfix

var infixToPostfix = function(s) {
          function prec(str) {
            if(str == "^") {
                return 3
            }
            if(str == "*" || str == "/") {
                return 2
            }
            if(str == "-" || str == "+") {
                return 1
            }
            else return -1
        }
        let stack = []
        let ans = ""
        for(let char of s) {
            if(char == "(") {
                stack.push(char)
            }
            else if(char == ")") {
                while(stack[stack.length - 1] != "(") {
                    ans += stack.pop()
                }
                stack.pop()
            }
            else if(char != "^" && char != "/" && char != "*" && char != "+" && char != "-") {
                ans += char
            }
            else {
                if(stack.length == 0) {
                    stack.push(char)
                }
                else {
                    while(!(stack.length == 0) && prec(char) <= prec(stack[stack.length - 1])) {
                        if(char == "^" && stack[stack.length - 1] == "^") {
                            break;
                        }
                        else {
                            ans += stack.pop()
                        }
                    }
                    stack.push(char)
                }
            }
        }
        while(stack.length != 0) {
            ans += stack.pop()
        }
        return ans
}



// Input: str = "a+b*(c^d-e)^(f+g*h)-i"
// Output: abcd^e-fgh*+^*+i-
// Explanation:
// After converting the infix expression 
// into postfix expression, the resultant 
// expression will be abcd^e-fgh*+^*+i-
