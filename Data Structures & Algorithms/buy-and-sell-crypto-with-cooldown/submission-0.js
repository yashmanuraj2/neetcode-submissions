class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       if (prices.length <= 1) return 0;

    
    let hold = -Infinity; 
    let sold = 0;         
    let rest = 0;         

    for (let price of prices) {
      
        let prevSold = sold; 
        
        sold = hold + price;
        hold = Math.max(hold, rest - price);
        rest = Math.max(rest, prevSold);
    }

    
    return Math.max(sold, rest);
    }
}
