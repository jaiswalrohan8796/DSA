//https://leetcode.com/problems/flipping-an-image/submissions/

var flipAndInvertImage = function (image) {
    ans = [];
    for (let row = 0; row < image.length; row++) {
        let temprow = [];
        for (let col = 0; col < image[row].length; col++) {
            if (image[row][col] == 1) {
                temprow.push(0);
            } else {
                temprow.push(1);
            }
        }
        ans.push(temprow.reverse());
    }
    return ans;
};

/*
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
*/
