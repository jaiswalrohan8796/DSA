class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackWithLinkedLists {
    constructor() {
        this.top = null;
    }
    getLength() {
        let count = 0;
        if (this.top == null) {
            return count;
        }
        let curr = this.top;
        while (curr) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    isEmpty() {
        return this.getLength() == 0;
    }
    push(data) {
        let newnode = new Node(data);
        newnode.next = this.top;
        this.top = newnode;
    }
    pop() {
        if (this.getLength == 0) {
            console.log("Stack empty");
            return null;
        }
        let curr = this.top;
        let temp = curr.data;
        curr.next = curr.next.next;
        return temp;
    }
    peek() {
        if (this.getLength == 0) {
            console.log("Stack empty");
            return null;
        }
        let curr = this.top;
        let temp = curr.data;
        return temp;
    }
}

let stack = new StackWithLinkedLists();
console.log(stack.getLength());
stack.push(11);
stack.push(21);
stack.push(31);
stack.push(41);
stack.push(51);
stack.push(60);
console.log(stack.peek());
