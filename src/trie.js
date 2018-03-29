const Node = require("./node");

class Trie {

  constructor() {
    this.data = [];
    this.root = new Node();
  }

  add(word, index) {
    this.data[index] = word;
    return this.addNode(this.root, word, index, word);
  }

  get(word) {
    return this.getNode(this.root, word);
  }

  addNode(node, word, index, fullWord) {
    const letter = word.charAt(0);
    const remain = word.substring(1);
    let children;
    if (!node.isChildren(letter)) {
      children = new Node();
      node.addChildren(letter, children);
    } else {
      children = node.getNode(letter);
    }

    if (remain) {
      this.addNode(children, remain, index, fullWord);
    } else {
      children.index = index;
      children.word = fullWord;
    }

    return this;
  }

  getNode(node, word) {
    const letter = word.charAt(0);
    const remain = word.substring(1);
    const children = node.getNode(letter);

    const isTheNext = (remain && children);

    return (isTheNext) ? this.getNode(children, remain) : children;
  }

  fill(data) {
    for (let i = 0; i < data.length; i++) {
      this.add(data[i], i);
    }
  }

  getWordByIndex(index) {
    return this.data[index];
  }
}

module.exports = Trie;