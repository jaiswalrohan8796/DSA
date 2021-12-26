class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.start = null;
    }
    print() {
        let ans = [];
        if (!this.start) {
            console.log("List empty");
        } else {
            let curr = this.start;
            while (curr) {
                ans.push(curr.data);
                curr = curr.next;
            }
            console.log(ans);
        }
    }
    printReverse() {
        let ans = [];
        if (!this.start) {
            console.log("List empty");
        } else {
            let curr = this.start;
            while (curr) {
                curr = curr.next;
            }
            let p = curr;
            while (p) {
                ans.push(p.prev);
                p = p.prev;
            }
            console.log(ans);
        }
    }
    insertAtEnd(data) {
        let newnode = new Node(data);
        if (!this.start) {
            this.start = newnode;
        } else {
            let curr = this.start;
            while (curr.next) {
                curr = curr.next;
            }
            newnode.prev = curr;
            curr.next = newnode;
        }
    }
    insertAtBegining(data) {
        let newnode = new Node(data);
        if (!this.start) {
            this.start = newnode;
        } else {
            newnode.prev = this.start;
            newnode.next = this.start;
            this.start = newnode;
        }
    }
}

lst = new DoubleLinkedList();
lst.insertAtEnd(1);
lst.insertAtEnd(2);
lst.insertAtEnd(3);
lst.print();
lst.printReverse();
