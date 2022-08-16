class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackWithLinkedLists {
    constructor() {
        this.top = null;
        this.size = 0
    }
    getLength() {
        return this.size
    }
    isEmpty() {
        return this.size == 0;
    }
    push(data) {
        let newnode = new Node(data);
        newnode.next = this.top;
        this.top = newnode;
        this.size++
    }
    pop() {
        if (this.size == 0) {
            console.log("Stack empty");
            return null;
        }
        const val = this.top.data;
        this.top = this.top.next
        return val;
    }
    peek() {
        if (this.size == 0) {
            console.log("Stack empty");
            return null;
        }
        return this.top.data
    }
    print() {
        if(!this.top) {
            console.log("Stack Empty")
            return
        }
        let ans = ""
        let curr = this.top
        while(curr) {
            ans += `->${curr.data}`
            curr = curr.next
        }
        console.log(`Stack : ${ans}`)
    }
}

let stack = new StackWithLinkedLists();
console.log(stack.getLength());
stack.push(11);
stack.push(21);
stack.push(31);
stack.push(41);
stack.push(51);
stack.push(61);
stack.print()
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.print()