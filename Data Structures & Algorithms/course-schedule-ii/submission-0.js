class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for (const [dest, src] of prerequisites) {
            adj[src].push(dest);
            indegree[dest]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const order = [];
        let head = 0;

        while (head < queue.length) {
            const currentCourse = queue[head++];
            order.push(currentCourse);

            for (const neighbor of adj[currentCourse]) {
                indegree[neighbor]--;

                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return order.length === numCourses ? order : [];
    }
}
