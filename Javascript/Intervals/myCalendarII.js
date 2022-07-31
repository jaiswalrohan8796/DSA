https://leetcode.com/problems/my-calendar-ii/submissions/


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

var MyCalendarTwo = function() {
    this.arr = []
};

MyCalendarTwo.prototype.book = function(s, e) {
    let overlaps = new MyCalendar()
    for(let [x,y] of this.arr) {
        let mL = Math.max(s,x)
        let mR = Math.min(e,y)
        if(mL < mR) {
            if(!overlaps.book(mL,mR)) return false
        }
    }
    this.arr.push([s,e])
    return true
};



// Input
// ["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// Output
// [null, true, true, true, false, true, true]
