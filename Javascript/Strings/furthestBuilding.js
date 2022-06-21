//https://leetcode.com/problems/furthest-building-you-can-reach/submissions/

var furthestBuilding = function(H, B, L) {
    let len = H.length - 1,
        pq = new MinPriorityQueue({priority: x => x})
    for (let i = 0; i < len; i++) {
        let diff = H[i+1] - H[i]
        if (diff > 0) {
            if (L > 0) pq.enqueue(diff), L--
            else if (pq.front() && diff > pq.front().element)
                pq.enqueue(diff), B -= pq.dequeue().element
            else B -= diff
            if (B < 0) return i
        }
    }
    return len
};



// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.