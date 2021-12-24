//https://leetcode.com/problems/replace-all-digits-with-characters/submissions/

var replaceDigits = function (s) {
    let shift = function (str, m) {
        let pos = str.charCodeAt(0);
        return String.fromCharCode(+pos + +m);
    };
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            ans += s[i];
        } else {
            let [char, n] = [s[i - 1], s[i]];
            let temp = shift(char, n);
            ans += temp;
        }
    }
    return ans;
};

/*Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f' */
