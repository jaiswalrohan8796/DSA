//https://leetcode.com/problems/destination-city/submissions/

var destCity = function(paths) {
    let out = {}
    let set = new Set()
    for(let edge of paths) {
        out[edge[0]] = 1
        set.add(edge[0])
        set.add(edge[1])
    }
    for(let city of set) {
        if(!(city in out)) {
            return city
        }
    }
};

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
