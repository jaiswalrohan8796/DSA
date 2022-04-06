// MOORE'S VOTING ALGORITHM
//Use to count the majority element in an array in optimised way. (majority == n/2)
//O(N) = O(N)
//O(S) = O(1)

var majorityElement = function (nums) {
    let curr = null;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            curr = nums[i];
            count = 1;
        } else {
            if (curr == nums[i]) count++;
            else count--;
        }
    }
    return curr;
};

// We will sweep down the sequence starting at the pointer position shown above.

// As we sweep we maintain a pair consisting of a current candidate and a counter. Initially, the current candidate is unknown and the counter is 0.

// When we move the pointer forward over an element e:

// If the counter is 0, we set the current candidate to e and we set the counter to 1.
// If the counter is not 0, we increment or decrement the counter according to whether e is the current candidate.
// When we are done, the current candidate is the majority element, if there is a majority.
