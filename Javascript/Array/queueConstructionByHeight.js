//https://leetcode.com/problems/queue-reconstruction-by-height/submissions/

var reconstructQueue = function(people) {
    let que = []
    people = people.sort(([a1,b1],[a2,b2]) => {
        if(a1 == a2) return b1 - b2
        return a2 - a1
    })
    for(let person of people) {
        que.splice(person[1],0,person)
    }
    return que
};


// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
