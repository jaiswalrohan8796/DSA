//https://practice.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions

class Solution {
    shortestDistance(N, M, A, X, Y) {
        //code here

        function getAdj(row, col) {
            let res = [];
            let poss = [
                [row - 1, col],
                [row + 1, col],
                [row, col - 1],
                [row, col + 1],
            ];
            for (let [x, y] of poss) {
                if (isValid(x, y)) {
                    res.push([x, y]);
                }
            }
            return res;
        }

        function isValid(row, col) {
            if (
                row < 0 ||
                col < 0 ||
                row >= N ||
                col >= M ||
                A[row][col] != 1
            ) {
                return false;
            } else {
                A[row][col] = 0;
                return true;
            }
        }

        let flag = false;
        let steps = -1;
        if (A[0][0] != 1) return -1;
        let que = [[0, 0]];
        while (que.length > 0) {
            steps += 1;
            let size = que.length;
            for (let i = 0; i < size; i++) {
                let [row, col] = que.shift();
                if (row == X && col == Y) {
                    flag = true;
                    break;
                }
                for (let [x, y] of getAdj(row, col)) {
                    que.push([x, y]);
                }
            }
            if (flag) {
                break;
            }
        }
        return flag ? steps : -1;
    }
}
