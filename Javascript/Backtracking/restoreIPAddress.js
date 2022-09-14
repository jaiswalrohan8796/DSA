//https://leetcode.com/problems/restore-ip-addresses/submissions/

var restoreIpAddresses = function (s) {
    let res = [];
    if (s.length > 12) return [];
    backtrack(0, 0, "");
    function backtrack(idx, dots, currIP) {
        if (idx == s.length && dots == 4) {
            res.push(currIP.slice(0, -1));
            return;
        }
        if (dots > 4) {
            return;
        }
        for (let j = idx; j < Math.min(idx + 3, s.length); j++) {
            let temp = s.slice(idx, j + 1);
            if (Number(temp) < 256 && (idx == j || s[idx] != 0)) {
                backtrack(j + 1, dots + 1, currIP + temp + ".");
            }
        }
    }
    return res;
};
