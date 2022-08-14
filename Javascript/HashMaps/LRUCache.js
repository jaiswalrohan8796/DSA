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
