//https://leetcode.com/problems/two-city-scheduling/submissions/

var twoCitySchedCost = function(costs) {
    let Acosts = 0
    let diff = []
    for(let cost of costs) {
        Acosts += cost[0]
        diff.push(cost[1] - cost[0])
    }
    diff.sort((a,b) => a-b)
    let subtract = diff.slice(0,costs.length/2).reduce((acc,v) => acc + v,0)
    return Acosts + subtract
    
};

//first calc total cost of moving all to first city
// then calc difference in cost of two city
// then sort(asc) the diff & get first half to be added to refund
// add total cost + differences(half)

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.