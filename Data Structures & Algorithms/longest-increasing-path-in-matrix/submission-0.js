class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
            return 0;
        }

        const rows = matrix.length;
        const cols = matrix[0].length;

        const memo = Array.from({ length: rows }, () => Array(cols).fill(0));

        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let maxPath = 0;

        const dfs = (r, c) => {
            if (memo[r][c] !== 0) {
                return memo[r][c];
            }

            let maxLength = 1;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc] > matrix[r][c]) {
                    maxLength = Math.max(maxLength, 1 + dfs(nr, nc));
                }
            }

            memo[r][c] = maxLength;
            return maxLength;
        };

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                maxPath = Math.max(maxPath, dfs(i, j));
            }
        }

        return maxPath;
    }
}
