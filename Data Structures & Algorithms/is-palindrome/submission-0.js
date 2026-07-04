class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim(), l = 0, r = cleanStr.length-1
        console.log("cleanStr", cleanStr)
        while (l < r) {

            if (cleanStr[l] === cleanStr[r]) {
                ++l
                --r

            }
            else {
                return false


            }






        }
        return true

    }
}