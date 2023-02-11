//https://leetcode.com/problems/koko-eating-bananas/description/

//minimise the time taking to eat all bananas in given hours
//use binary search from 1  - max(piles)
//find mid & check feasilbility to east at that speed by summation <= hours
//move left or right according to feasibility.

var minEatingSpeed = function(piles, h) {
    let maxx  = Math.max(...piles)
    function feasible(speed) {
        let time = piles.reduce((acc, v) => {
            return acc + Math.ceil(v / speed)
        }, 0)
        return time <= h
    }
    let left = 1
    let right = maxx
    while(left < right) {
        let mid = ~~((left + right)/2)
        if(feasible(mid)) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left
};

// Input: piles = [3,6,7,11], h = 8
// Output: 4
