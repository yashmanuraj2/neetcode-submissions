class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
      const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);


    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }

    const queue = [];


    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0)
            queue.push(i);
    }

    let count = 0;

    while (queue.length > 0) {
        const course = queue.shift();
        count++;
        for (const neighbor of graph[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0)
                queue.push(neighbor);
        }
    }

    return count === numCourses;
    }
}
