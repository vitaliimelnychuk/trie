const Trie = require("../src/trie");
const assert = require("chai").assert;

const data = [
  "test", "test123$#^#^%@", "123Abc", "software Engineer", "Marketing 1 director", "te"
];

describe("trie", () => {
  describe("#get()", () => {
    const trie = new Trie();
    trie.fill(data);
    it("check words index", () => {
      assert.equal(trie.root.index, -1);
      data.forEach((item, i) => {
        assert.equal(trie.get(item).index, i);
      });
    });
    it("should return null when there isn't node", () => {
      assert.equal(trie.get("something undefined"), null);
      assert.equal(trie.get(data[2]).index, 2);
    });
  });

  describe("#add()", () => {
    it("should return trie instance", () => {
      const trie = new Trie();
      assert.equal(trie.add("Something special", 10), trie);
    });
  });
});