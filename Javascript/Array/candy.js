//https://leetcode.com/problems/candy/submissions/

var candy = function(ratings) {
    let n = ratings.length
    let arr = new Array(n).fill(1)
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i-1]) {
            arr[i] = arr[i-1] + 1
        }
    }
    for(let i = n - 1; i > 0; i--) {
        if(ratings[i-1] > ratings[i]) {
            arr[i - 1] = Math.max(arr[i - 1], arr[i] + 1)
        }
    }
    let sum = arr.reduce((acc,v) => acc + v,0)
    return sum
};


// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
