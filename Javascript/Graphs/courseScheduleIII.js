//leetcode.com/problems/course-schedule-iii/submissions/

var scheduleCourse = function (C) {
    C.sort((a, b) => a[1] - b[1]);
    let total = 0,
        pq = new MaxPriorityQueue({ priority: (x) => x });
    for (let [dur, end] of C)
        if (dur + total <= end) (total += dur), pq.enqueue(dur);
        else if (pq.front() && pq.front().element > dur)
            (total += dur - pq.dequeue().element), pq.enqueue(dur);
    return pq.size();
};

// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3
// Explanation:
// There are totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
