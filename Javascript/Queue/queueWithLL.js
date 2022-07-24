function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.head = null;
    this.tail = null;
}

Queue.prototype.isEmpty = function () {
    console.log(!this.head);
    return !this.head;
};

Queue.prototype.enqueue = function (data) {
    //new Node
    let newNode = new Node(data);
    //chek if empty
    if (this.isEmpty()) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }
    console.log(`Enqueued ${data}`);
};

Queue.prototype.dequeue = function () {
    if (this.isEmpty()) {
        console.log(`Queue Empty`);
        return;
    } else {
        let node = this.head;
        this.head = this.head.next;
        if (this.head == null) {
            this.tail = null;
        }
        console.log(`Dequeued ${node.data}`);
        return node.data;
    }
};

Queue.prototype.print = function () {
    let ans = [];
    if (this.head == null) {
        console.log(`Queue Empty`);
    } else {
        let curr = this.head
        while (curr) {
            ans.push(curr.data);
            curr = curr.next;
        }
        console.log(`Queue : ${ans}`);
    }
};

Queue.prototype.front = function () {
    if (this.head == null) {
        console.log(`Queue is underflowed`);
    } else {
        console.log(`Head : ${this.head.data}`);
        return this.head.data;
    }
};

Queue.prototype.back = function () {
    if (this.tail == null) {
        console.log(`Queue is underflowed`);
    } else {
        console.log(`Tail : ${this.tail.data}`);
        return this.tail.data;
    }
};

Queue.prototype.size = function () {
    let size = 0;
    if (this.head == null) {
        console.log(`Size : ${size} . Queue is underflowed. `);
        return size;
    } else {
        let curr = this.head;
        while (curr) {
            size++;
            curr = curr.next;
        }
        console.log(`Size : ${size}`);
        return size;
    }
};

queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
queue.dequeue();
queue.print();
queue.front();
queue.back();
queue.isEmpty();
queue.size();
