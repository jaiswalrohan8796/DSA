//https://leetcode.com/problems/network-delay-time/submissions/

//BFS + updating the time taken to be minimum

var networkDelayTime = function (times, n, k) {
    let gp = new Map();
    for (let i = 1; i <= n; i++) {
        gp.set(i, []);
    }
    for (let e of times) {
        gp.get(e[0]).push([e[1], e[2]]);
    }
    //console.log(gp)
    let vis = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let que = [[k, 0]];
    vis[k] = 0;
    while (que.length > 0) {
        let size = que.length;
        for (let j = 0; j < size; j++) {
            let [curr, t] = que.shift();
            //console.log(`On node ${curr} : time ${t}`)
            for (let adj of gp.get(curr)) {
                if (vis[adj[0]] > vis[curr] + adj[1]) {
                    vis[adj[0]] = vis[curr] + adj[1];
                    que.push(adj);
                }
            }
        }
    }
    //console.log(vis)
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res = Math.max(res, vis[i]);
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

//Short & Sweet

const networkDelayTime = (times, N, K) => {
    const time = Array(N + 1).fill(Infinity);
    time[K] = 0;
    for (let i = 0; i < N; i++) {
        for (const [u, v, t] of times) {
            if (time[u] === Infinity) continue;
            if (time[v] > time[u] + t) {
                time[v] = time[u] + t;
            }
        }
    }

    let res = 0;
    for (let i = 1; i <= N; i++) {
        res = Math.max(res, time[i]);
    }
    return res === Infinity ? -1 : res;
};
