//https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/submissions/

var minDominoRotations = function (tops, bottoms) {
    topsOcc = {};
    for (let num of tops) {
        topsOcc[num] = topsOcc[num] ? topsOcc[num] + 1 : 1;
    }
    bottomOcc = {};
    for (let num of bottoms) {
        bottomOcc[num] = bottomOcc[num] ? bottomOcc[num] + 1 : 1;
    }
    function findMaxOcc(obj1, obj2) {
        let maxm1 = 0;
        for (let prop in obj1) {
            maxm1 = Math.max(maxm1, obj1[prop]);
        }
        let maxm2 = 0;
        for (let prop in obj2) {
            maxm2 = Math.max(maxm2, obj2[prop]);
        }
        if (maxm1 > maxm2) {
            return [obj1, maxm1, "tops"];
        }
        return [obj2, maxm2, "bottoms"];
    }
    let [Obj, maxm, arry] = findMaxOcc(topsOcc, bottomOcc);
    function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value);
    }
    let occ = getKeyByValue(Obj, maxm);
    let toSwitch;
    let fromSwitch;
    if (arry == "tops") {
        toSwitch = tops;
        fromSwitch = bottoms;
    } else {
        toSwitch = bottoms;
        fromSwitch = tops;
    }
    let count = 0;
    for (let i = 0; i < toSwitch.length; i++) {
        if (toSwitch[i] != occ) {
            console.log(toSwitch[i]);
            console.log(fromSwitch[i]);
            if (fromSwitch[i] != occ) {
                return -1;
            } else {
                count++;
            }
        }
    }
    return count;
};

// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation:
// The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
// Output: -1
// Explanation:
// In this case, it is not possible to rotate the dominoes to make one row of values equal.
