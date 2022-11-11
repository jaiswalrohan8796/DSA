//https://practice.geeksforgeeks.org/problems/alien-dictionary/1

//Wrong Answer if " " ( <space> ) characters in string.

class Solution {
    findOrder(dict, N, K) {
        //code here
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let G = new Map();
        for (let i = 0; i < N - 1; i++) {
            let f = dict[i];
            let s = dict[i + 1];
            if (f == " " || s == " ") continue;
            let size = Math.min(f.length, s.length);
            for (let j = 0; j < size; j++) {
                if (f[j] == s[j]) continue;
                else {
                    G.set(f[j], s[j]);
                    break;
                }
            }
        }
        //console.log(G)
        function dfs(node, vis, ans) {
            vis.set(node, 1);
            if (G.has(node)) {
                if (!vis.has(G.get(node))) {
                    dfs(G.get(node), vis, ans);
                }
            }
            ans.push(node);
        }
        let ans = [];
        let vis = new Map();
        for (let i = 0; i < K; i++) {
            if (!vis.has(letters[i])) {
                dfs(letters[i], vis, ans);
            }
        }
        let res = ans.reverse();
        return res.join("");
    }
}
