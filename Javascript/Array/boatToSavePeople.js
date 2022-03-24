//https://leetcode.com/problems/boats-to-save-people/submissions/

var numRescueBoats = function (people, limit) {
    let b = 0;
    people.sort((a, b) => a - b);
    low = 0;
    high = people.length - 1;
    while (low <= high) {
        if (people[low] + people[high] <= limit) {
            low++;
            high--;
        } else {
            high--;
        }
        b++;
    }
    return b;
};

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
