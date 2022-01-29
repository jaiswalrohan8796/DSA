//https://leetcode.com/problems/maximum-units-on-a-truck/submissions/

var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(([type1,count1],[type2,count2]) => count2 - count1)
    let truck = 0
    for(let [type,count] of boxTypes) {
        let boxes = Math.min(type,truckSize)
        truck += (boxes * count)
        truckSize -= boxes
        if (truckSize == 0) return truck
    }
    return truck
};

/* Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.*/