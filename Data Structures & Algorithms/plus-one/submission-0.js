class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

        let res = [], carry = 1

        for (let i = digits.length - 1; i >= 0; i--) {
          
            if (digits[i] + carry > 9) {
                carry = 1
                res.push(0)
            }

            else {

                res.push(digits[i] + carry)
                carry = 0
            }


        }
        if(carry ===1)
        res.push(1)

        return res.reverse()



    }
}