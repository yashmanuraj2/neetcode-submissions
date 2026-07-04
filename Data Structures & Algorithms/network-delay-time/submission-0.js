class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {     
     const adj = new Map();
    for (const [u, v, t] of times) {
        if (!adj.has(u)) adj.set(u, []);
        adj.get(u).push([v, t]);
    }    
    const pq = [[0, k]];
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    while (pq.length > 0) {
    
        pq.sort((a, b) => a[0] - b[0]);
        const [d, u] = pq.shift();

        if (d > dist[u]) continue;
        if (!adj.has(u)) continue;

        for (const [v, t] of adj.get(u)) {
            if (dist[u] + t < dist[v]) {
                dist[v] = dist[u] + t;
                pq.push([dist[v], v]);
            }
        }
    }
    let maxDelay = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxDelay = Math.max(maxDelay, dist[i]);
    }

    return maxDelay;

    }
}
