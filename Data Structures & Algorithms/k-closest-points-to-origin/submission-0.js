class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let distanceMap = new Map()
        function getDistance(x, y) {

            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        }

        for (let i = 0; i < points.length; i++) {
            distanceMap.set(points[i], getDistance(points[i][0], points[i][1]))
        }

        const sortedMap = new Map(
            [...distanceMap.entries()].sort((a, b) => a[1] - b[1])
        );
        console.log("sortedMap", sortedMap)
        let res = [], count = 0

for (const [key, value] of sortedMap) {
    if (count < k) {
        res.push(key);
        ++count;
    } else {
        break;
    }
}

        return res
    }
}
