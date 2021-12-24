//https://leetcode.com/problems/rings-and-rods/submissions/

var countPoints = function (rings) {
    let rods = {};
    for (let i = 0; i < rings.length; i += 2) {
        let [color, pos] = [rings[i], rings[i + 1]];
        if (rods[pos]) {
            rods[pos].push(color);
        } else {
            rods[pos] = [color];
        }
    }
    let c = 0;
    for (let [k, v] of Object.entries(rods)) {
        if (v.includes("R") && v.includes("G") && v.includes("B")) {
            c++;
        }
    }
    return c;
};

/*Input: rings = "B0B6G0R6R0R6G9"
Output: 1
Explanation: 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1. */
