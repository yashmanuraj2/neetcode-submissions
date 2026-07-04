class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {

    const memo = new Map();

  function dp(i, j) {
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);

    if (j === t.length) return 1; 
    if (i === s.length) return 0; 

    let result;
    if (s[i] === t[j]) {
      result = dp(i + 1, j + 1) + dp(i + 1, j);
    } else {
      result = dp(i + 1, j);
    }

    memo.set(key, result);
    return result;
  }

  return dp(0, 0);
       
     
           


         
         








    }
}
