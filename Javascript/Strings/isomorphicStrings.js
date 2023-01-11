//https://leetcode.com/problems/isomorphic-strings/description/

var isIsomorphic = function(s, t) {
    let mymap = new Map()
    if (s.length != t.length) return false
    for(let i = 0; i < s.length; i++) {
        if(!mymap.has(s[i])) {
            mymap.set(s[i], t[i])
        }
        else {
            if(mymap.get(s[i]) != t[i]) {
                return false
            }
        }
    }
    return mymap.size == new Set(mymap.values()).size
};
