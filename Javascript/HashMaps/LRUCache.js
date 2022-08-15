//https://leetcode.com/problems/lru-cache/submissions/

//We need to track the recent used key, so in Javascrip Maps store keys in insertion order.

var LRUCache = function (capacity) {
    this.cache = new Map();
    this.cap = capacity;
};

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;
    const item_value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, item_value);
    return this.cache.get(key);
};

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.cap) {
        let keyToDelete = this.cache.keys().next().value;
        this.cache.delete(keyToDelete);
    }
};

//We can also use Double Ended LinkedList to store Least Recent Used & Most Recent Used keys.

function Node(key, value) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(key, val) {
        let newNode = new Node(key, val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return newNode;
    }
    remove(node) {
        if (!node.next && !node.prev) {
            this.head == null;
            this.tail == null;
        } else if (!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else if (!node.prev) {
            this.head = node.next;
            this.head.prev = null;
        } else {
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        this.size--;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.cache = {};
        this.DL = new DoublyLinkedList();
    }
    get(key) {
        if (!this.cache[key]) return -1;
        const val = this.cache[key].val;
        this.DL.remove(this.cache[key]);
        this.cache[key] = this.DL.push(key, val);
        return val;
    }
    put(key, val) {
        if (this.cache[key]) {
            this.DL.remove(this.cache[key]);
        }
        this.DL.push(key, val);
        if (this.DL.size > this.cap) {
            let lru = this.DL.head.key;
            delete this.cache[lru];
            this.DL.remove(this.DL.head);
        }
    }
}
