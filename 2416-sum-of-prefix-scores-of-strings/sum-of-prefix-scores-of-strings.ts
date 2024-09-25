class TrieNode {
    public score: number;
    public child: TrieNode[];

    constructor() {
        this.score = 0;
        this.child = Array(26).fill(0);
    }

    add(word: string, index: number) {
        if (index) this.score++;
        if (index == word.length) return;
        const i = word[index].charCodeAt(0) - 'a'.charCodeAt(0)
        if (!this.child[i]) this.child[i] = new TrieNode();
        this.child[i].add(word, index + 1);
    }

    dfs(word: string, index: number): number {
        if (index == word.length) return this.score;
        const i = word[index].charCodeAt(0) - 'a'.charCodeAt(0)
        return this.score + this.child[i].dfs(word, index + 1);
    }
}

function sumPrefixScores(words: string[]): number[] {
    const trie: TrieNode = new TrieNode();
    for (let word of words) trie.add(word, 0);
    return words.map(word => trie.dfs(word, 0));
}

console.log(sumPrefixScores(["abc", "ab", "bc", "b"])) // [5,4,3,2]
console.log(sumPrefixScores(["abcd"])) // [4]