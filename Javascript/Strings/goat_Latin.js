//https://leetcode.com/problems/goat-latin/submissions/

var toGoatLatin = function (sentence) {
    let ans = "";
    let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    let a_counter = 1;
    let words = sentence.split(" ");
    for (let word of words) {
        let startWithVowel = vowels.includes(word[0]);
        if (startWithVowel) {
            let temp = word.slice();
            let adder = "a".repeat(a_counter);
            temp += "ma" + adder;
            ans += temp;
            a_counter++;
        } else {
            let temp = word.slice(1, word.length) + word.slice(0, 1);
            let adder = "a".repeat(a_counter);
            temp += "ma" + adder;
            ans += temp;
            a_counter++;
        }
        ans += " ";
    }
    return ans.slice(0, ans.length - 1);
};

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"