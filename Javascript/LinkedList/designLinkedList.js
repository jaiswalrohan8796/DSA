// /https://leetcode.com/problems/design-linked-list/submissions/

function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
    if (index > this.size - 1) return -1;
    let current = this.head;

    while (index--) current = current?.next;
    return current?.val ?? -1;
};

MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);

    if (!this.head) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size += 1;
};

MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);

    if (!this.head) {
        this.head = this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size += 1;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    const node = new Node(val);
    let current = this.head;

    while (--index) current = current?.next;
    node.next = current.next;
    current.next = node;
    this.size += 1;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;

        while (--index) current = current.next;
        current.next = current.next?.next;
        if (!current.next) this.tail = current;
    }
    this.size -= 1;
};
