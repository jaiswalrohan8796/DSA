//https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/submissions/

var numberOfWeakCharacters = function (properties) {
    let props = properties.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    console.log(props);
    let max = 0;
    let count = 0;
    for (let i = 0; i < props.length; i++) {
        if (props[i][1] < max) {
            count++;
        }
        max = Math.max(max, props[i][1]);
    }
    return count;
};
