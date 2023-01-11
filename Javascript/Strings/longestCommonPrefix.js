//https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function(strs) {
    let comm = ""
    let idx = 0
    function common(idx, strs) {
        if (idx >= strs[0].length) return false
        let temp = strs[0][idx]
        for(let str of strs) {
            if(temp != str[idx]){
                return false
            }
        }
        return true
    }
    let n = strs[0].length
    for(let i = 0; i < n; i++) {
        if(common(i, strs)) {
            comm += strs[0][i]
        }
        else {
            return comm
        }
    }
    return comm
};


//Javascript Reduce Method
var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
