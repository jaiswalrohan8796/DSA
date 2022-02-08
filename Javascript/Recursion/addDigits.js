//https://leetcode.com/problems/add-digits/submissions/

var addDigits = function (num) {
    function recursiveAdd(num) {
        if (String(num) < 10) {
            return num;
        } else {
            let temp = 0;
            num_str = String(num);
            for (let char of num_str) {
                temp += Number(char);
            }
            console.log(temp);
            return recursiveAdd(temp);
        }
    }
    let final = recursiveAdd(num);
    return final;
};


// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.