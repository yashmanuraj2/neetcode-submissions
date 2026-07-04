class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const map1 = new Map(), map2 = new Map()
        if (s.length !== t.length) {
            return false
        }
      function checkMaps(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            return false;
        }
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}

        for (let i = 0; i < s.length; i++) {
            if (map1.has(s[i])) {
                map1.set(s[i], map1.get(s[i]) + 1)
            }
            else {
                map1.set(s[i], 1)
            }

        }

        for (let j = 0; j < t.length; j++) {
            if (map2.has(t[j])) {
                map2.set(t[j], map2.get(t[j]) + 1)
            }
            else {
                map2.set(t[j], 1)
            }

        }
         console.log("map1,map2",map1,map2)
        console.log(checkMaps(map1, map2))

      return checkMaps(map1,map2)




    }
}
