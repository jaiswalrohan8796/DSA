//https://leetcode.com/problems/unique-number-of-occurrences/submissions/

var uniqueOccurrences = function(arr) {
    let counts = {}
    for(let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1
    }
    let uniques = []
    for(let [k,v] of Object.entries(counts)) {
        if(!uniques.includes(v)) {
            uniques.push(v)
        }
        else{
            return false
        }
    }
    return true
};

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.