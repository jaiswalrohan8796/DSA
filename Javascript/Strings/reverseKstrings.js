//https://leetcode.com/problems/reverse-string-ii/submissions/

var reverseStr = function(s, k) {
    let lst = []
    for(let i = 0; i < s.length; i+= k) {
        let temp = s.slice(i,i+k)
        lst.push(temp)
    }
    console.log(lst)
    let ans = ""
    for(let i = 0; i < lst.length; i++) {
        if ( i%2 == 0) {
            let t = lst[i].split("").reverse().join("")
            ans += t 
        }
        else {
            ans += lst[i]
        }
    }
    return ans
};

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"