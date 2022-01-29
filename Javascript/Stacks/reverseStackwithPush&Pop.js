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
    print() {
        return this.list;
    }
}

let stack = new StackWithArray();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
rev = reverse(stack);

function reverse(stack) {
    function revStackRecursion(stack, newStack = new StackWithArray()) {
        if (!stack.isEmpty()) {
            newStack.push(stack.pop());
            revStackRecursion(stack, newStack);
        } else {
            console.log(newStack.print());
        }
    }
    revStackRecursion(stack);
}
