class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
           if (s1.length > s2.length) return false;

    const s1Map = new Map();
    const windowMap = new Map();

    // Build frequency map for s1
    for (let ch of s1) {
        s1Map.set(ch, (s1Map.get(ch) || 0) + 1);
    }

    // Initialize window
    for (let i = 0; i < s1.length; i++) {
        const ch = s2[i];
        windowMap.set(ch, (windowMap.get(ch) || 0) + 1);
    }

    function mapsAreEqual(m1, m2) {
        if (m1.size !== m2.size) return false;
        for (let [key, val] of m1) {
            if (m2.get(key) !== val) return false;
        }
        return true;
    }

    if (mapsAreEqual(s1Map, windowMap)) return true;

    // Slide window over s2
    for (let i = s1.length; i < s2.length; i++) {
        const addChar = s2[i];
        const removeChar = s2[i - s1.length];

        // Add new char to window
        windowMap.set(addChar, (windowMap.get(addChar) || 0) + 1);

        // Remove old char from window
        if (windowMap.get(removeChar) === 1) {
            windowMap.delete(removeChar);
        } else {
            windowMap.set(removeChar, windowMap.get(removeChar) - 1);
        }

        if (mapsAreEqual(s1Map, windowMap)) return true;
    }

    return false;

}}