class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         
         const n = position.length;
    let cars = [];

    for (let i = 0; i < n; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }

  
    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let maxTime = 0;

    for (let [pos, time] of cars) {
        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
        
    }

    return fleets;

    }
}
