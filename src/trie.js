const Node = require("./node");

class Trie {

  constructor() {
    this.root = new Node();
  }

  add(word, index) {
    return this.addNode(this.root, word, index);
  }

  get(word) {
    return this.getNode(this.root, word);
  }

  addNode(node, word, index) {
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
      this.addNode(children, remain, index);
    } else {
      children.index = index;
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
}

module.exports = Trie;