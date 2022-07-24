//https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1?page=1&difficulty[]=0&category[]=Dynamic%20Programming&sortBy=submissions

function loot(arr, n) {
    function maxLoot(hval, n, dp) {
        // base case
        if (n < 0) {
            return 0;
        }
        if (n == 0) {
            return hval[0];
        }
        // If the subproblem is already solved
        // then return its value
        if (dp[n] != -1) {
            return dp[n];
        }

        //if current element is pick then previous cannot be picked
        let pick = hval[n] + maxLoot(hval, n - 2, dp);
        //if current element is not picked then previous element is picked
        let notPick = maxLoot(hval, n - 1, dp);

        // return max of picked and not picked
        return (dp[n] = Math.max(pick, notPick));
    }
    let dp = new Array(n + 1).fill(-1);
    return maxLoot(arr, n - 1, dp);
}
