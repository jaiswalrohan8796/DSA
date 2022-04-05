//https://leetcode.com/problems/find-players-with-zero-or-one-losses/submissions/

var findWinners = function (matches) {
    let winners = [];
    let oneLosers = [];
    let degrees = {};
    let losersAll = {};
    let winnersAll = {};
    for (let match of matches) {
        losersAll[match[1]] = losersAll[match[1]] ? losersAll[match[1]] + 1 : 1;
        winnersAll[match[0]] = winnersAll[match[0]]
            ? winnersAll[match[0]] + 1
            : 1;
    }

    for (let win in winnersAll) {
        if (!(win in losersAll)) {
            winners.push(win);
        }
    }
    for (let los in losersAll) {
        if (losersAll[los] == 1) {
            oneLosers.push(los);
        }
    }
    return [winners, oneLosers];
};

// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = []

//Intuition
//Count the no. of indegrees of all nodes === no.of times loose
//Count the no. of out degrees === no. of times win
//Be careful with cases where theres both win & loose.
//Iterate with degrees & calc. all only winners(with only wins) & all loosers(with exactly one lose)
