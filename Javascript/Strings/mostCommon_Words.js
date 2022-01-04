//https://leetcode.com/problems/most-common-word/submissions/

var mostCommonWord = function(paragraph, banned) {
    let para = paragraph.replace(/[^\w\s]/gi, ' ') 
    para = para.toLowerCase().split(" ")
    let counts = {}
    for(let word of para) {
        if(counts.hasOwnProperty(word)) {
            counts[word] += 1
        }
        else {
            counts[word] = 1
        }
    }
    let sorted_count = Object.entries(counts).sort(([,a],[,b]) => b - a)
    for(let pair of sorted_count) {
        if(!banned.includes(pair[0])) {
            return pair[0]
        }
    }
    
};


// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.