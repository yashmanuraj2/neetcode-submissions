class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
       const result = [];
    const currentPartition = [];

    // Helper function to check if a substring is a palindrome
    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    const backtrack = (start) => {
      
        if (start >= s.length) {
            
            result.push([...currentPartition]);
            return;
        }

       
        for (let end = start; end < s.length; end++) {
           
            if (isPalindrome(start, end)) {
             
                currentPartition.push(s.slice(start, end + 1));
                
               
                backtrack(end + 1);
                
                
                currentPartition.pop();
            }
        }
    };

    backtrack(0);
    
    return result;

    }
}
