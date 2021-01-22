/**
 * 
 * 核心思想： 空间换时间
利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的
 * 
 */

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

