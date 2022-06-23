//https://leetcode.com/problems/course-schedule/submissions/

function canFinish(numCourses, prerequisites) {
    const seen = new Set();
    const seeing = new Set();
    const adj = [...Array(numCourses)].map((r) => []);

    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;

    function dfs(v) {
        if (seen.has(v)) return true;
        if (seeing.has(v)) return false;

        seeing.add(v);
        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        return true;
    }
}

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
