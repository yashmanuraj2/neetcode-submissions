class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = Array.from({ length: 1001 }, (_, i) => i),
            res = [];

        function find(u, v) {
            if (parent[u] !== u) {
                parent[u] = find(parent[u]);
            }
            return parent[u];
        }

        function union(u, v) {
            const pu = find(u);
            const pv = find(v);
            if (pu === pv) {
                return false;
            }
            parent[pu] = pv;
            return true;
        }

        for (const [u, v] of edges) {
            if (!union(u, v)) {
                return [u, v];
            }
        }

        return res;
    }
}
