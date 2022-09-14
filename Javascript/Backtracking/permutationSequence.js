//https://leetcode.com/problems/permutation-sequence/submissions/

var getPermutation = function (n, k) {
    let nums = [];
    let fact = 1;
    // get (n-1) factorial & also nums array [1, 2, 3 ..n]
    for (let i = 1; i < n; i++) {
        fact = fact * i;
        nums.push(i);
    }
    nums.push(n);
    // make k 0th indexing
    k = k - 1;

    // iterate while nums is not empty
    let ans = "";
    while (true) {
        let pos = ~~(k / fact);
        ans += nums.splice(pos, 1);
        if (nums.length == 0) break;
        k = k % fact;
        fact = fact / nums.length;
    }
    return ans;
};
