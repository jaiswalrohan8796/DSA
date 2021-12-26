//https://leetcode.com/problems/add-binary/submissions/

var addBinary = function (a, b) {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2);
};

//   Input: a = "11", b = "1"
// Output: "100"
