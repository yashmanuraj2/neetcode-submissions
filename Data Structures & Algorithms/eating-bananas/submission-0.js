class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

           let low = 1;
    let high = Math.max(...piles);

    const canFinish = (k) => {
        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / k);
        }

        return hours <= h;
    };

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (canFinish(mid)) {
            high = mid; 
        } else {
            low = mid + 1; 
        }
    }

    return low;








    }
}
