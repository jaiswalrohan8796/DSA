//FLOYD TORTOISE & HARE ALGORITHM
//Use Case : - When we need to find cycle in a linkedkist
//Big-O :- O(n)

//Follow-Up : - To determine where the cycle begins, 
//1.Find the common-point (slow == fast), then start the finder pointer from start till it meets the slow pointer.

//https://leetcode.com/problems/find-the-duplicate-number/submissions/

var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};


// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

//Steps
//1. The above array represents a linked list which has a cycle.
//2. Use Floyd-Tortoise Algorithm
//3. Use Slow (moves 1 step) & Fast (moves 2 step) pointers. If the meet, that determines there is a cycle
//4. To find which start point of cycle,
//5. Distance of start to cycle start point  == distance of (slow == fast) meet pointer to cycle start point
//6. Initialize a finder pointer from start, stop when it meets the slow pointer. (Both moves 1 step)