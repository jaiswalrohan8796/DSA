// /https://leetcode.com/problems/group-anagrams/submissions/

var groupAnagrams = function (strs) {
    let map = {};
    for (let char of strs) {
        let key = char
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join("");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(char);
    }
    return Object.values(map);
};
