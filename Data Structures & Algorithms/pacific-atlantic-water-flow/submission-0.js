class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights || heights.length === 0 || heights[0].length === 0) return [];

    const numRows = heights.length;
    const numCols = heights[0].length;

    const pacificReachable = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const atlanticReachable = Array.from({ length: numRows }, () => Array(numCols).fill(false));


    const dfs = (row, col, reachable, prevHeight) => {
   
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) return;
        
        
        if (reachable[row][col] || heights[row][col] < prevHeight) return;

        
        reachable[row][col] = true;

      
        dfs(row + 1, col, reachable, heights[row][col]); // Down
        dfs(row - 1, col, reachable, heights[row][col]); // Up
        dfs(row, col + 1, reachable, heights[row][col]); // Right
        dfs(row, col - 1, reachable, heights[row][col]); // Left
    };

 
    for (let i = 0; i < numRows; i++) {
        dfs(i, 0, pacificReachable, heights[i][0]); 
        dfs(i, numCols - 1, atlanticReachable, heights[i][numCols - 1]);
    }

    for (let j = 0; j < numCols; j++) {
        dfs(0, j, pacificReachable, heights[0][j]); 
        dfs(numRows - 1, j, atlanticReachable, heights[numRows - 1][j]); 
    }

    const result = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;








    }
}
