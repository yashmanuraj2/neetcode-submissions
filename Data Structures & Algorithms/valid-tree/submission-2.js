class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let parent = [];
        if (edges.length !== n - 1) {
            return false;
        }
        let adj_matrix = Array.from({ length: n }, () => []);
        console.log("adj", adj_matrix);
        for (const [u, v] of edges) {
            adj_matrix[u].push(v);
            adj_matrix[v].push(u);
        }
        let visitedSet = new Set();

        function dfs(node) {
            visitedSet.add(node);

            for (const key of adj_matrix[node]) {
                if (!visitedSet.has(key)) {
                    dfs(key);
                }
            }
        }
        dfs(0)

        return visitedSet.size === n
    }
}
