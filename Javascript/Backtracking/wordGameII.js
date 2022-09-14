//https://leetcode.com/problems/word-search-ii/submissions/

//TLE - Need to thing efficient approach
//I blindely used same approach for every word
var findWords = function (board, words) {
    let res = [];
    for (let word of words) {
        if (findWord(board, word)) {
            res.push(word);
        }
    }
    return res;
};

function findWord(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (checkWord(board, word, row, col)) return true;
        }
    }
    return false;
}

function isOutOfBound(board, row, col) {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length;
}

function checkWord(board, word, row, col) {
    if (word.length == 0) return true;
    if (isOutOfBound(board, row, col) || board[row][col] != word[0])
        return false;
    const currChar = board[row][col];
    const newWord = word.substr(1);
    board[row][col] = 0;
    const results =
        checkWord(board, newWord, row + 1, col) ||
        checkWord(board, newWord, row - 1, col) ||
        checkWord(board, newWord, row, col + 1) ||
        checkWord(board, newWord, row, col - 1);
    board[row][col] = currChar;
    return results;
}
