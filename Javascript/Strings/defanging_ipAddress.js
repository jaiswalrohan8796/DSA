//https://leetcode.com/problems/defanging-an-ip-address/submissions/

var defangIPaddr = function (address) {
    let ans = "";
    for (let char of address) {
        let temp = "";
        if (isNaN(char)) {
            temp = "[.]";
        } else {
            temp = char;
        }
        ans += temp;
    }
    return ans;
};

/*
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1" */
