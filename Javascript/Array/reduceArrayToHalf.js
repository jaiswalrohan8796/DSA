//https://leetcode.com/problems/reduce-array-size-to-the-half/submissions/

var minSetSize = function (arr) {
    const numFreq = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        numFreq[arr[i]] ? numFreq[arr[i]]++ : (numFreq[arr[i]] = 1);

    const sortedIntegerFeq = Object.values(numFreq).sort((a, b) => b - a);

    for (let i = 0; i < sortedIntegerFeq.length; i++) {
        count += sortedIntegerFeq[i];
        if (count >= arr.length / 2) return i + 1;
    }
};
