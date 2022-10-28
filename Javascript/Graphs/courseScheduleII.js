//https://leetcode.com/problems/course-schedule-ii/

var findOrder = function (numCourses, prerequisites) {
    let gp = new Map();
    let indeg = Array(numCourses).fill(0);
    for (let [u, v] of prerequisites) {
        indeg[u] += 1;
        if (!gp.has(v)) {
            gp.set(v, []);
        }
        gp.get(v).push(u);
    }
    //console.log(indeg)
    //console.log(gp)
    let que = [];
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] == 0) {
            que.push(i);
        }
    }
    let ans = [];
    while (que.length > 0) {
        let curr = que.shift();
        ans.push(curr);
        if (!gp.has(curr)) continue;
        for (let adj of gp.get(curr)) {
            indeg[adj] -= 1;
            if (indeg[adj] == 0) {
                que.push(adj);
            }
        }
    }
    return ans.length == numCourses ? ans : [];
};
