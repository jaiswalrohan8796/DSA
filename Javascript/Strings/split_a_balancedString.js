//https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/

var balancedStringSplit = function(s) {
    
    let matches = 0;
	const stack = [];

	stack.push(s[0]);

	for (let i = 1; i < s.length; i++) {

		const top = stack[stack.length - 1];

		if (top !== undefined && top !== s[i]) {
			stack.pop()
		} else {
			stack.push(s[i]);
		}

		if (stack.length === 0) {
			matches += 1;
		}
	}

	return matches;
};

/*
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'. */