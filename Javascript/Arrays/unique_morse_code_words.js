//https://leetcode.com/problems/unique-morse-code-words/submissions/

var uniqueMorseRepresentations = function(words) {
    let morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    morse_final_array = []
    words.forEach((word) => {
        let letter_seq = word.split('')
        let morse_seq = ""
        letter_seq.forEach((letter) => {
            letter = letter.toLowerCase()
            let ascii = letter.charCodeAt(0)
            let pos = ascii - 97
            morse_seq += morseCodes[pos]
        })
        morse_final_array.push(morse_seq)
    })
    if (morse_final_array.length == 1) return 1
    return new Set(morse_final_array).size
    
};

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".