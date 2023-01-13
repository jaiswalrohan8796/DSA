//https://leetcode.com/problems/maximum-number-of-balloons/description/

var maxNumberOfBalloons = function(text) {
    let balloon = new Map()
    balloon.set("b", 0)
    balloon.set("a", 0)
    balloon.set("l", 0)
    balloon.set("l", 0)
    balloon.set("o", 0)
    balloon.set("o", 0)
    balloon.set("n", 0)
    let hmap = new Map()
    for(let i = 0; i < text.length; i++) {
        let char = text[i]
        if(balloon.has(char)) {
            balloon.set(char, balloon.get(char) + 1)
        }
    }
    let minn = Math.min(balloon.get("b"), balloon.get("a"), balloon.get("n"), ~~(balloon.get("l")/2), ~~(balloon.get("o")/2))
    return minn
};
