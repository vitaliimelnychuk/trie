class Node {
  constructor() {
    this.index = -1;
    this.childrens = [];
  }

  addChildren(letter, node) {
    const code = this.getLetterCode(letter);
    this.childrens[code] = node;
  }

  isChildren(letter) {
    const code = this.getLetterCode(letter);
    return (this.childrens[code]);
  }

  getNode(letter) {
    const code = this.getLetterCode(letter);
    return (this.childrens[code]) ? this.childrens[code] : null;
  }

  getLetterCode(letter) {
    return letter.charCodeAt(0);
  }
}

module.exports = Node;