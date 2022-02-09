function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.head = null;
    
}

Queue.prototype.enqueue = function (data) {
    let newnode = new Node(data);
    if (this.head == null) {
        this.head = newnode;
        console.log(`Enqueued : ${data}`);
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newnode;
        console.log(`Enqueued : ${data}`);
    }
};

Queue.prototype.dequeue = function () {
    if (this.head == null) {
        console.log(`Queue is undeflowed`);
        return null;
    } else {
        let temp = this.head;
        this.head = this.head.next;
        console.log(`Dequeued : ${temp.data}`);
        return temp.data;
    }
};

Queue.prototype.print = function () {
    let ans = [];
    if (this.head == null) {
        console.log(ans);
        return null;
    } else {
        let curr = this.head;
        while (curr) {
            ans.push(curr.data);
            curr = curr.next;
        }
        console.log(`Queue : ${ans}`);
        return null;
    }
};

Queue.prototype.front = function () {
    if (this.head == null) {
        console.log(`Queue is underflowed`);
        return null;
    } else {
        console.log(`Front : ${this.head.data}`);
        return this.head.data;
    }
};

Queue.prototype.back = function () {
    if (this.head == null) {
        console.log(`Queue is underflowed`);
        return null;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        console.log(`Back : ${curr.data}`);
        return curr.data;
    }
};

Queue.prototype.isEmpty = function () {
    console.log(`isEmpty : ${!this.head}`);
    return !this.head;
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
queue.front();
queue.back();
queue.print();
queue.isEmpty();
queue.size();
