class Trie {
  constructor() {
    this.isEnd = false;
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let s of word) {
      if (!node[s]) {
        node[s] = {};
        node[s].isEnd = false;
      }
      node = node[s];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.traverse(word);
    return !!node && !!node.isEnd;
  }

  startsWith(prefix) {
    let node = this.traverse(prefix);
    return !!node;
  }

  traverse(word) {
    let node = this.root;
    for (let s of word) {
      if (!node[s]) return null;
      node = node[s];
    }
    return node;
  }
}
