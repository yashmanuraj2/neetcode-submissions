class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {

            const stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            const top = stack[stack.length - 1];

            if (Math.abs(asteroid) > Math.abs(top)) {
                stack.pop(); // top asteroid explodes
                continue; // keep checking
            } else if (Math.abs(asteroid) === Math.abs(top)) {
                stack.pop(); // both explode
                destroyed = true;
                break;
            } else {
                // current asteroid explodes
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;



    }
}
