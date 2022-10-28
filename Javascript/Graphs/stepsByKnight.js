//https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1?page=1&category[]=Graph&sortBy=submissions

class Solution {
    //Function to find out minimum steps Knight needs to reach target position.
    minStepToReachTarget(KnightPos, TargetPos, N) {
        // code here
        function findNext([row, col]) {
            let res = [];
            let possible = [
                [row + 2, col + 1],
                [row + 2, col - 1],
                [row - 2, col + 1],
                [row - 2, col - 1],
                [row + 1, col + 2],
                [row + 1, col - 2],
                [row - 1, col + 2],
                [row - 1, col - 2],
            ];
            for (let poss of possible) {
                if (isValid(poss)) res.push(poss);
            }
            return res;
        }
        function isValid([row, col]) {
            return row > 0 && row <= N && col > 0 && col <= N;
        }
        let vis = new Array(N + 1);
        for (let i = 0; i < vis.length; i++) {
            vis[i] = new Array(N + 1).fill(false);
        }
        let que = [[KnightPos[0], KnightPos[1]]];
        vis[KnightPos[0]][KnightPos[1]] = true;
        let steps = 0;
        let ans = Infinity;
        while (que.length > 0) {
            let size = que.length;
            for (let i = 0; i < size; i++) {
                let curr = que.shift();
                if (curr[0] == TargetPos[0] && curr[1] == TargetPos[1]) {
                    ans = Math.min(ans, steps);
                }
                for (let nei of findNext(curr)) {
                    if (!vis[nei[0]][nei[1]]) {
                        vis[nei[0]][nei[1]] = true;
                        que.push([nei[0], nei[1]]);
                    }
                }
            }
            steps += 1;
        }
        return ans;
    }
}
