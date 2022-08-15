function Node(val) {
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
    print() {
        if (!this.head) {
            console.log(`DoublyLinkedList is empty :(`);
            return;
        }
        let ans = [];
        let curr = this.head;
        while (curr) {
            ans.push(curr.val);
            curr = curr.next;
        }
        console.log(`DoublyLinkedList : ${ans.join(" <--> ")}`);
    }
    printRev() {
        if (!this.tail) {
            console.log(`DoublyLinkedList is empty :(`);
            return;
        }
        let ans = [];
        let curr = this.tail;
        while (curr) {
            ans.push(curr.val);
            curr = curr.prev;
        }
        console.log(`DoublyLinkedList (Rev) : ${ans.join(" <--> ")}`);
    }
    insertAtHead(val) {
        let node = new Node(val);
        if (!this.head && !this.tail) {
            this.head = this.tail = node;
        } else {
            let rest = this.head;
            this.head = node;
            node.next = rest;
            rest.prev = node;
        }
        this.size++;
    }
    insertAtTail(val) {
        let node = new Node(val);
        if (!this.head && !this.tail) {
            this.head = this.tail = node;
        } else {
            let last = this.tail;
            this.tail = node;
            last.next = node;
            node.prev = last;
        }
        this.size++;
    }
    insertAtPos(val, pos) {
        if (pos < 0 || pos >= this.size) {
            console.log("Position is invalid :(");
            return;
        }
        if (pos == 0) {
            return this.insertAtHead(val);
        }
        if (pos == this.size - 1) {
            return this.insertAtTail(val);
        }
        let node = new Node(val);
        let curr = this.head;
        while (pos-- && curr.next) {
            curr = curr.next;
        }
        let rest = curr.next;
        rest.prev = node;
        node.next = rest;
        curr.next = node;
        node.prev = curr;
        this.size++;
    }
    popHead() {
        if (!this.head) {
            console.log("DoublyLinkedList is empty :(");
            return;
        } else if (this.size == 1) {
            this.head = this.tail = null;
            this.size--;
            return;
        } else {
            let nextNode = this.head.next;
            this.head = this.head.next;
            nextNode.prev = null;
            this.size--;
        }
    }
    popTail() {
        if (!this.tail) {
            console.log("DoublyLinkedList is empty :(");
            return;
        } else if (this.size == 1) {
            this.tail = this.head = null;
            this.size--;
        } else {
            let previousNode = this.tail.prev;
            previousNode.next = null;
            this.tail = previousNode;
            this.size--;
        }
    }
    popAtPos(pos) {
        if (!this.head && !this.tail) {
            console.log("DoublyLinkedList is empty");
            return;
        }
        if (pos < 0 || pos >= this.size) {
            console.log("Position is invalid");
            return;
        }
        if (pos == 0) {
            return this.popHead();
        }
        if (pos == this.size - 1) {
            return this.popTail();
        }
        let curr = this.head;
        while (--pos && curr.next) {
            curr = curr.next;
        }
        let nextNode = curr.next.next;
        curr.next = nextNode;
        nextNode.prev = curr;
        this.size--;
    }
}

dll = new DoublyLinkedList();
dll.insertAtTail(0);
dll.insertAtTail(5);
dll.insertAtTail(10);
dll.insertAtTail(15);
dll.insertAtTail(20);
dll.print();
dll.popAtPos(3);
dll.print();
