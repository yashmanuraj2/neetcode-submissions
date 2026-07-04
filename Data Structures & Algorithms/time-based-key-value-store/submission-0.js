class TimeMap {
    constructor() {
        this.keyStore = new Map();

    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            let keyValue = this.keyStore.get(key);
            keyValue.push([value, timestamp]);
        } else {
            this.keyStore.set(key, [[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
       const values = this.keyStore.get(key);
        if (!values) return "";

        let res = "";
        let l = 0;
        let r = values.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            
            // If we find the exact timestamp, return immediately
            if (values[mid][1] === timestamp) {
                return values[mid][0];
            }

            // If mid is less than timestamp, it's a potential candidate
            if (values[mid][1] < timestamp) {
                res = values[mid][0]; // Store the "best so far"
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
      
    }
}
