//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/submissions/

var countGoodSubstrings = function (s) {
    let a = s[0];
    let b = s[1];
    let c = s[2];
    let count = 0;
    let i = 3;
    while (i < s.length) {
        if (a != b && b != c && a != c) count++;
        [a, b] = [b, c];
        c = s[i];
        i++;
    }
    if (a != b && b != c && a != c) count++;
    return count;
};

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".

//Intuition
//Use sliding window technique
//init a,b,c at first, then loop from 3 to end of string
//check at each step if its unique or not, count++
//check at last after loop also
