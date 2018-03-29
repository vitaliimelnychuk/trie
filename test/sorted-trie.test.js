const Trie = require("../src/sorted-trie");
const assert = require("chai").assert;

const data = [
  "aa", "aabbs", "aa bc", "dd a c", "113test^", "433)", "a1 b", "a3"
];

const trie = new Trie();
trie.fill(data);

describe("sorted-trie", () => {
  describe("#getWords()", () => {
    it("check words sorting", () => {
      const expectedData = [
        "a1 b", "a3", "aa", "aa bc"
      ];

      assert.deepEqual(trie.getWords("a", 4), expectedData);

    });
    it("should return only two words", () => {
      const expectedData = ["a1 b", "a3"];
      assert.deepEqual(trie.getWords("a", 2), expectedData);
    });
  });

  describe("#getNodeWords()", () => {
    it("should return all words from specific node", () => {
      const expectedData = ["aa bc", "aabbs"];
      const node = trie.get("aa");
      assert.deepEqual(trie.getNodeWords(node, 5, []), expectedData);
    });
    it("should return all words from specific node when words are exist", () => {
      const expectedData = ["test", "aa bc", "aabbs"];
      const node = trie.get("aa");
      assert.deepEqual(trie.getNodeWords(node, 5, ["test"]), expectedData);
    });
  });
});