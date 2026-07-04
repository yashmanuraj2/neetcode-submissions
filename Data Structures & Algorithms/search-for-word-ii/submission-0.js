class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
       class TrieNode {
        constructor() {
            this.children = {};
            this.word = null;
        }
    }

    function buildTrie(words) {
        const root = new TrieNode();
        for (let word of words) {
            let node = root;
            for (let char of word) {
                if (!node.children[char])
                    node.children[char] = new TrieNode();
                node = node.children[char];
            }
            node.word = word;
        }
        return root;
    }



    const root = buildTrie(words);
    const result = [];
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, node) {
        const char = board[r][c];
        const nextNode = node.children[char];
        if (!nextNode) return;
        if (nextNode.word !== null) {
            result.push(nextNode.word);
            nextNode.word = null;
        }
        board[r][c] = '#';
        for (let [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && board[nr][nc] !== '#') {
                dfs(nr, nc, nextNode);
            }
        }

        board[r][c] = char;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
    }
}
