//https://leetcode.com/problems/search-suggestions-system/submissions/

var suggestedProducts = function (products, searchWord) {
    products.sort((a, b) => a.localeCompare(b));
    let res = [];
    for (let i = 0; i < searchWord.length; i++) {
        let query = searchWord.slice(0, i + 1);
        let list = products;
        let temp = [];
        for (let word of list) {
            if (word.startsWith(query)) {
                temp.push(word);
            }
            if (temp.length == 3) break;
        }
        res.push(temp);
    }
    return res;
};


// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]