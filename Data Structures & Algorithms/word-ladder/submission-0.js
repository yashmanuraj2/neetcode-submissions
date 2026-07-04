class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);

        if (!wordSet.has(endWord)) return 0;

        let queue = [[beginWord, 1]];

        const visited = new Set();
        visited.add(beginWord);

        while (queue.length > 0) {
            let [currentWord, depth] = queue.shift();

            for (let i = 0; i < currentWord.length; i++) {
                for (let charCode = 97; charCode <= 122; charCode++) {
                    let newChar = String.fromCharCode(charCode);
                    let nextWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

                    if (nextWord === endWord) return depth + 1;

                    if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                        visited.add(nextWord);
                        queue.push([nextWord, depth + 1]);
                    }
                }
            }
        }

        return 0;
    }
}
