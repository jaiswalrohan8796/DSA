//https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/submissions/

var minDeletions = function(s) {
    let map = {}
    for(let char of s) {
        map[char] = map[char] ? map[char] + 1 : 1
    }
    map = Object.entries(map).sort(([,a],[,b]) => b-a);
    map = map.map(([a,b]) => b)
    let maxs = new Map()
    let ans = 0
    for(let num of map) {
        if(!maxs.has(num)) {
            maxs.set(num,num)
        }
        else {
            while(maxs.has(num) && num > 0) {
                num--
                ans++
            }
            if(num > 0){
                maxs.set(num,num)   
            }
        }
    }
    return ans
};

// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
