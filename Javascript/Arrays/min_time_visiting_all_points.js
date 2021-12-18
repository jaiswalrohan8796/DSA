//https://leetcode.com/problems/minimum-time-visiting-all-points/submissions/

var minTimeToVisitAllPoints = function (points) {
    let steps = 0;
    for (let i = 1; i < points.length; i++) {
        let x_distance = Math.abs(points[i - 1][0] - points[i][0]);
        let y_distance = Math.abs(points[i - 1][1] - points[i][1]);
        steps += Math.max(x_distance, y_distance);
    }
    return steps;
};

/* 
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
*/
