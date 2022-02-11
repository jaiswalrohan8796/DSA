//https://leetcode.com/problems/permutation-in-string/submissions/

var checkInclusion = function (s1, s2) {
    function shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (let key of keys1) {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
        return true;
    }
    function makeObject(str) {
        let obj = {};
        for (let char of str) {
            obj[char] = obj[char] ? obj[char] + 1 : 1;
        }
        return obj;
    }
    const s1Obj = makeObject(s1);
    const window = s1.length;
    for (let i = 0; i < s2.length - window + 1; i++) {
        const s2Obj = makeObject(s2.slice(i, i + window));
        console.log(s2Obj);
        if (shallowEqual(s1Obj, s2Obj) == true) {
            return true;
        }
    }
    return false;
};

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
