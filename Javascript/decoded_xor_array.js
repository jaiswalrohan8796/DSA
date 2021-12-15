//https://leetcode.com/problems/decode-xored-array/submissions/

var decode = function (encoded, first) {
    let result = [first];

    for (let i = 0; i < encoded.length; i++) {
        result.push(result[i] ^ encoded[i]);
    }

    return result;
};

/*
Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
*/
