//https://leetcode.com/problems/time-needed-to-buy-tickets/submissions/

var timeRequiredToBuy = function (tickets, k) {
    let c = 0;
    while (tickets[k] != 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] != 0) {
                tickets[i]--;
                c++;
            }
            if (i == k && tickets[i] == 0) {
                break;
            }
        }
    }
    return c;
};

// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
