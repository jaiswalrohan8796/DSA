//https://leetcode.com/problems/my-calendar-i/

var MyCalendar = function() {
    this.cal = []
};

MyCalendar.prototype.book = function(start, end) {
    for(let [i,j] of this.cal) {
        let maxL = Math.max(start,i)
        let minR = Math.min(end,j)
        if(maxL < minR) {
            return false
        }
    }
    this.cal.push([start,end])
    return true
};

// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output
// [null, true, false, true]
