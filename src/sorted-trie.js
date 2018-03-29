const Trie = require("./trie");

class SortedTrie extends Trie {

  getWords(prefix, count) {
    const node = this.get(prefix);

    return (node) ? this.getNodeWords(node, count, [], []) : [];
  }

  getNodeWords(node, count, words) {
    for (let i = 0; i < node.childrens.length; i++) {
      if (words.length == count) return words;
      if (node.childrens[i]) {
        if (node.childrens[i].index != -1) {
          words.push(this.getWordByIndex(node.childrens[i].index));
        }
        this.getNodeWords(node.childrens[i], count, words);
      }
    }

    return words;
  }
}

module.exports = SortedTrie;