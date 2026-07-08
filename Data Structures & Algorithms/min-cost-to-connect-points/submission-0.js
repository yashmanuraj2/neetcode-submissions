class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        let totalCost = 0;
        let edgesUsed = 0;

        const visited = new Array(n).fill(false);
        const minDist = new Array(n).fill(Infinity);
        minDist[0] = 0;

        while (edgesUsed < n) {
            let currNode = -1;
            let currMinDist = Infinity;

            for (let i = 0; i < n; i++) {
                if (!visited[i] && minDist[i] < currMinDist) {
                    currMinDist = minDist[i];
                    currNode = i;
                }
            }

            totalCost += currMinDist;
            visited[currNode] = true;
            edgesUsed++;
            const [x1, y1] = points[currNode];
            for (let nextNode = 0; nextNode < n; nextNode++) {
                if (!visited[nextNode]) {
                    const [x2, y2] = points[nextNode];
                    const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

                    if (dist < minDist[nextNode]) {
                        minDist[nextNode] = dist;
                    }
                }
            }
        }

        return totalCost;
    }
}
