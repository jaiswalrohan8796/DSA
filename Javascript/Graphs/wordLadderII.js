//https://leetcode.com/problems/word-ladder-ii/

var findLadders = function (beginWord, endWord, wordList) {
    function canEdge(s1, s2) {
        let diff = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] != s2[i]) diff++;
        }
        if (diff == 1) return true;
        return false;
    }
    //check
    if (beginWord == endWord) return [];
    if (!wordList.includes(endWord)) return [];
    let G = new Map();
    //map beginWord to all words
    if (!wordList.includes(beginWord)) {
        for (let word of wordList) {
            if (canEdge(beginWord, word)) {
                if (!G.has(beginWord)) G.set(beginWord, []);
                if (!G.has(word)) G.set(word, []);
                G.get(beginWord).push(word);
            }
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
    //console.log(G)
    let ans = [];
    let path = [beginWord];
    let flag = [Infinity];
    if (!G.has(beginWord)) return [];
    for (let nei of G.get(beginWord)) {
        if (path.includes(nei)) continue;
        BFS(nei, [beginWord, nei], ans, G, flag, endWord, beginWord);
    }
    //console.log(flag[0])
    let res = [];
    for (let a of ans) {
        if (a.length == flag[0]) {
            res.push(a);
        }
    }
    return res;
};
function BFS(node, path, ans, G, flag, endWord, beginWord) {
    //console.log(node, path)
    if (node == endWord) {
        flag[0] = Math.min(flag[0], path.length);
        ans.push([...path]);
        return;
    }
    if (!G.has(node)) return;
    for (let nei of G.get(node)) {
        if (nei == node || nei == beginWord) continue;
        if (path.includes(nei)) continue;
        BFS(nei, [...path, nei], ans, G, flag, endWord, beginWord);
    }
}
