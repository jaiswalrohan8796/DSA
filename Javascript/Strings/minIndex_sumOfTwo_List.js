//https://leetcode.com/problems/minimum-index-sum-of-two-lists/submissions/

var findRestaurant = function (list1, list2) {
    let ans = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                ans.push([i + j, list1[i]]);
            }
        }
    }
    let minm = Number.MAX_SAFE_INTEGER;
    for (let pair of ans) {
        minm = Math.min(minm, pair[0]);
    }
    let fin = [];
    for (let pair of ans) {
        if (pair[0] == minm) {
            fin.push(pair[1]);
        }
    }
    return fin;
};

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".