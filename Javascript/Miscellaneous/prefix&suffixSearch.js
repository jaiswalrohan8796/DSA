//https://leetcode.com/problems/prefix-and-suffix-search/

//My approach // TLE

var WordFilter = function(words) {
    this.words = words
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let ans = null
    let n = this.words.length - 1
    for(let i = n; i >= 0; i--) {
        let p = prefix.length
        let s = suffix.length
        if(prefix == this.words[i].slice(0,p) && suffix == this.words[i].substr(-s)) {
            return i 
        }
    }
    return -1
};

//Used

class WordFilter {
    constructor(words) {
        this.pTrie = new Array(27)
        this.sTrie = new Array(27)
        for (let index = 0; index < words.length; index++) {
            let word = words[index], wlen = word.length
            this.insert(word, index, this.pTrie, 0, wlen, 1)
            this.insert(word, index, this.sTrie, wlen-1, -1, -1)
        }
    }
    
    insert(word, index, trie, start, end, step) {
        for (let i = start; i != end; i += step) {
            let c = word.charCodeAt(i) - 97
            if (!trie[c]) trie[c] = new Array(27)
            trie = trie[c]
            if (!trie[26]) trie[26] = []
            trie[26].push(index)
        }
    }
    
    retrieve(word, trie, start, end, step) {
        for (let i = start; i != end; i += step) {
            let c = word.charCodeAt(i) - 97
            if (!trie[c]) return -1
            trie = trie[c]
        }
        return trie[26]
    }
    
    f(pre, suf) {
        let pVals = this.retrieve(pre, this.pTrie, 0, pre.length, 1),
            sVals = this.retrieve(suf, this.sTrie, suf.length-1, -1, -1),
            svix = sVals.length - 1, pvix = pVals.length - 1
        while (~svix && ~pvix) {
            let sVal = sVals[svix], pVal = pVals[pvix]
            if (sVal === pVal) return sVal
            sVal > pVal ? svix-- : pvix--
        }
        return -1
    }
};


// Input
// ["WordFilter", "f"]
// [[["apple"]], ["a", "e"]]
// Output
// [null, 0]

// Explanation
// WordFilter wordFilter = new WordFilter(["apple"]);
// wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = 'e".

