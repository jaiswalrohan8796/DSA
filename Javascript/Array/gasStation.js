//https://leetcode.com/problems/gas-station/submissions/


var canCompleteCircuit = function(gas,cost) {
    let totalGas = gas.reduce((acc,v) => acc + v, 0)
    let totalCost = cost.reduce((acc,v) => acc + v,0)
    if(totalGas < totalCost) return -1
    let total = 0
    let start = 0
    for(let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        if(total < 0) {
            total = 0
            start = i+1
        }
    }
    return start
}
//My intuition ( TLE Error )
// var canCompleteCircuit = function(gas, cost) {
//     let len = gas.length - 1
//     let res = -1
//     for(let t = 0; t < gas.length; t++) {
//         let i = t
//         let tank = gas[i]
//         let loopflag = i
//         while(tank >= cost[i]) {
//             //jump
//             tank = tank - cost[i]
//             i = i == len ? 0 : i+1
//             if(i == loopflag) {
//                 res = loopflag
//                 return res
//             }
//             //refill
//             tank += gas[i]
//         }
//     }
//     return res
// };


// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

