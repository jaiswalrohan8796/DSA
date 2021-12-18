//https://leetcode.com/problems/find-the-highest-altitude/submissions/

var largestAltitude = function(gain) {
    let altitudes = [0]
    for(let i = 0; i < gain.length; i++) {
        altitudes.push(altitudes[i] + gain[i])
        }
    return Math.max(...altitudes)
};

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.