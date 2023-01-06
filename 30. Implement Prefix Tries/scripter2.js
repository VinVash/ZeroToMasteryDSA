class TrieNode {
    constructor() {
        this.end = false
        this.keys = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word, node = this.root) {
        if(word.length === 0) {
            node.end = true
            return
        } else if (!node.keys[word[0]]) {
            node.keys[word[0]] = new TrieNode()
            this.insert(word.substring(1), node.keys[word[0]])
        } else { // the first letter of the word is present, hence no need to create a TrieNode.
            this.insert(word.substring(1), node.keys[word[0]])
        }
    }

    Search(word, node = this.root) {
        if(word.length === 0 && node.end) {
            return true
        } else if(word.length === 0) {
            return false
        } else if(!node.keys[word[0]]) { // the first letter of the word is not present in the keys.
            return false
        } else {
            return this.Search(word.substring(1), node.keys[word[0]])
        }
    }

    StartsWith(prefix, node = this.root) {
        if(prefix.length === 0) {
            return true
        } else if(!node.keys[prefix[0]]) {
            return false
        } else {
            return this.StartsWith(prefix.substring(1), node.keys[prefix[0]])
        }
    }
}