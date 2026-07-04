class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = [],
            directions = [
                [-1, 0],
                [1, 0],
                [0, 1],
                [0, -1],
            ],
            rows = grid.length,
            cols = grid[0].length,
            visitedSet = new Set();

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        while (queue.length > 0) {
          let node = queue.shift()
            let r = node[0] , c = node[1]


            for (const [x, y] of directions) {
                let nr = r + x;
                let nc = c + y;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 2147483647) {
                    grid[nr][nc] = grid[r][c] + 1
                    queue.push([nr,nc])
                }
            }
        }
        return grid
    }
}
