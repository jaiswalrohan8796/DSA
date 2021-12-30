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
            curr.next  = newnode
            newnode.prev = curr
        }
    }
    insertAtBegining(data) {
        let newnode = new Node(data);
        if (!this.start) {
            this.start = newnode;
        } else {
            newnode.next = this.start;
            this.start.prev = newnode
            this.start = newnode;
        }
    }
    traverseFromEnd() {
        if (!this.start) {
            console.log("List empty");
        } else {
            let curr = this.start;
            while (curr.next) {
                curr = curr.next;
            }
            while (curr) {
                console.log(curr.data);
                curr = curr.prev;
            }
        }
    }
    popAt(k) {
        if(!this.start || k < 0) {
            return
        }
        else {
            let curr = this.start
            let pos = 0
            while(pos != k) {
                curr = curr.next
                pos++
            }
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
    }
}

lst = new DoubleLinkedList();
lst.insertAtEnd(1);
lst.insertAtEnd(2);
lst.insertAtEnd(3);
lst.insertAtEnd(4);
lst.insertAtEnd(6);
lst.popAt(2)
lst.print()
