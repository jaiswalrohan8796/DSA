class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
    }
    //append at end
    appendAtEnd(data) {
        let newnode = new Node(data);
        if (this.start == null) {
            this.start = newnode;
        } else {
            let p = this.start;
            while (p.next) {
                p = p.next;
            }
            p.next = newnode;
        }
    }
    //append at begining
    appendAtBegining(data) {
        let newnode = new Node(data);
        if (!this.start) {
            this.start = newnode;
        } else {
            newnode.next = this.start;
            this.start = newnode;
        }
    }
    //append at pos
    appendAtPos(data, pos) {
        let newnode = new Node(data);
        if (pos > this.length() || pos < 0) {
            console.log("Position not found");
            return null;
        } else {
            let idx = 0;
            let p = this.start;
            while (idx != pos - 1) {
                idx++;
                p = p.next;
            }
            newnode.next = p.next;
            p.next = newnode;
        }
    }
    //pop first
    popFirst() {
        if (!this.start) {
            console.log("list empty");
            return null;
        } else {
            let node = this.start;
            this.start = this.start.next;
            return node.data;
        }
    }
    //pop last
    popLast() {
        if (!this.start) {
            console.log("list empty");
            return null;
        } else {
            let p = this.start;
            while (p.next.next) {
                p = p.next;
            }
            let node = p.next;
            p.next = null;
            return node.data;
        }
    }
    //pop at given pos
    popAtPos(pos) {
        if (!this.start) {
            return null;
        } else if (pos > this.length() || pos < 0) {
            console.log("position not found");
            return null;
        } else if (pos == 0) {
            let node = this.start;
            this.start = this.start.next;
            return node.data;
        } else {
            let p = this.start;
            let idx = 1;
            while (idx != pos && p.next != null) {
                p = p.next;
                idx++;
            }
            let node = p;
            let temp = p.next.next;
            p.next = temp;
            return node.data;
        }
    }
    //pop by value
    popByData(data) {
        if (!this.start) {
            console.log("List empty");
            return null;
        } else if (this.start.data == data) {
            let node = this.start;
            this.start = this.start.next;
            return node.data;
        } else {
            let p = this.start;
            while (p.next) {
                if (p.next.data == data) {
                    let node = p.next;
                    p.next = p.next.next;
                    return node.data;
                }
                p = p.next;
            }
        }
        console.log(data, " Value not Found");
        return null;
    }
    //length
    length() {
        let l = 0;
        if (!this.start) {
            return l;
        } else {
            let p = this.start;
            while (p) {
                l++;
                p = p.next;
            }
            return l;
        }
    }
    //traversing the list
    print() {
        let arr = [];
        let p = this.start;
        if (!p) {
            console.log("List Empty");
        } else {
            while (p) {
                arr.push(p.data);
                p = p.next;
            }
        }
        console.log(arr);
    }
    //reverse
    reverse() {
        if (!this.start) {
            console.log("List empty");
            return null;
        } else {
            let prev = null;
            let p = this.start;
            while (p) {
                let next = p.next;
                p.next = prev;
                prev = p;
                p = next;
            }
            this.start = prev;
        }
    }
    //sort (bubble)
    sort() {
        let end = null;
        while (end != this.start.next) {
            let p = this.start;
            while (p.next != end) {
                let q = p.next;
                if (p.data > q.data) {
                    [p.data, q.data] = [q.data, p.data];
                }
                p = p.next;
            }
            end = p;
        }
    }
}

let lst = new LinkedList();
lst.appendAtEnd(1);
lst.appendAtEnd(5);
lst.appendAtEnd(4);
lst.appendAtEnd(7);
lst.appendAtEnd(9);
lst.appendAtEnd(6);
lst.appendAtEnd(2);
lst.appendAtBegining(0)
lst.popAtPos(3);
lst.popByData(2)
lst.sort()
lst.reverse()
lst.print();
