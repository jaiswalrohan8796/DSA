class StackWithArray {
    constructor() {
        this.list = [];
    }
    getSize() {
        return this.list.length;
    }
    isEmpty() {
        return this.list.length === 0;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    peek() {
        return this.list[this.list.length - 1];
    }
}

let stack = new StackWithArray();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.isEmpty());
console.log(stack.getSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
