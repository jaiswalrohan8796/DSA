//https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/

var reverseWords = function(s) {
    let words = s.split(" ")
    let ans = ""
    for(let word of words) {
        word = word.split("")
        word.reverse()
        word = word.join("")
        ans += word
        ans += " "
    }
    return ans.slice(0,ans.length - 1)
};

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"