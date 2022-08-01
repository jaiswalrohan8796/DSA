//https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/

var countPoints = function(points, queries) {
    function helper(x1,y1,x,y,r) {
        return Math.pow(x-x1,2) + Math.pow(y-y1,2) <= Math.pow(r,2)
    }
    function checkPoints(x,y,r) {
        let count = 0
        for(let point of points) {
            let x1 = point[0]
            let y1 = point[1]
            if(helper(x1,y1,x,y,r)) {
                count++
            }
        }
        return count
    }
    let ans = []
    for(let que of queries) {
        let x = que[0]
        let y = que[1]
        let r = que[2]
        ans.push(checkPoints(x,y,r))
    }
    return ans
};


// Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
// Output: [3,2,2]
// Explanation: The points and circles are shown above.
// queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.


//How to check if a point lies inside a circle
// Mathematically,condition for point ot lie inside a circle is  (center_x - point_x)^2 + (center_y - point_y)^2 <= radius*radius
