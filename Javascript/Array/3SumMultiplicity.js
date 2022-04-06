//https://leetcode.com/problems/3sum-with-multiplicity/submissions/

var threeSumMulti = function (arr, target) {
    let nmap = new Uint16Array(101),
        third = target / 3,
        ans = 0;
    for (let i in arr) nmap[arr[i]]++;
    for (let k = Math.min(target, 100); k >= third; k--) {
        let rem = target - k,
            half = rem / 2;
        for (let j = Math.min(rem, k); j >= half; j--) {
            let i = rem - j,
                x = nmap[i],
                y = nmap[j],
                z = nmap[k],
                res;
            if (i === k) res = (x * (x - 1) * (x - 2)) / 6;
            else if (i === j) res = ((x * (x - 1)) / 2) * z;
            else if (j === k) res = (x * y * (y - 1)) / 2;
            else res = x * y * z;
            ans = (ans + res) % 1000000007;
        }
    }
    return ans;
};

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation:
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
