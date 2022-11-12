//https://leetcode.com/problems/word-ladder/description/

var ladderLength = function (beginWord, endWord, wordList) {
    function canEdge(s1, s2) {
        let diff = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] != s2[i]) diff++;
        }
        if (diff == 1) return true;
        return false;
    }
    //check
    if (beginWord == endWord) return 0;
    if (!wordList.includes(endWord)) return 0;
    let G = new Map();
    //map beginWord to all words
    for (let word of wordList) {
        if (canEdge(beginWord, word)) {
            if (!G.has(beginWord)) G.set(beginWord, []);
            if (!G.has(word)) G.set(word, []);
            G.get(beginWord).push(word);
        }
    }
    //map all words to each other
    for (let i = 0; i < wordList.length; i++) {
        for (let j = 0; j < wordList.length; j++) {
            if (i == j) continue;
            if (canEdge(wordList[i], wordList[j])) {
                if (!G.has(wordList[i])) G.set(wordList[i], []);
                if (!G.has(wordList[j])) G.set(wordList[j], []);
                G.get(wordList[i]).push(wordList[j]);
            }
        }
    }
    let ans = 0;
    let flag = false;
    let vis = new Set();
    vis.add(beginWord);
    let que = [[beginWord, -1]];
    while (que.length > 0) {
        let size = que.length;
        for (let i = 0; i < size; i++) {
            let [curr, count] = que.shift();
            console.log(curr, count);
            if (curr == endWord) {
                flag = true;
                if (ans < count) ans = count;
            } else {
                if (!G.has(curr)) continue;
                for (let nei of G.get(curr)) {
                    if (!vis.has(nei)) {
                        vis.add(nei);
                        que.push([nei, count + 1]);
                    }
                }
            }
        }
    }
    return flag ? ans + 2 : 0;
};
