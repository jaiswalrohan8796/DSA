function Queue() {
    this.queue = [];
    this.front = null;
    this.rear = null;
    this.size = 0;
}

Queue.prototype.enqueue = function (data) {
    this.queue.push(data);
    if (this.front == null) {
        this.front = this.rear = 0;
    } else {
        this.rear = this.size;
    }
    this.size++;
    console.log(`Enqueued : ${data}`);
};

Queue.prototype.dequeue = function () {
    if (this.size == 0) {
        console.log(`Queue underflow`);
        return null;
    } else {
        let temp = this.queue.shift();
        this.size--;
        if (this.size == 0) {
            this.front = this.rear = null;
        } else {
            this.rear = this.size - 1;
        }
        console.log(`Dequeued : ${temp}`);
        return temp;
    }
};

Queue.prototype.print = function () {
    console.log(`Queue : ${this.queue}`);
};

Queue.prototype.peekFront = function () {
    if(this.queue.length == 0) {
        console.log(`Queue is underflowed`)
        return
    }
    console.log(`Front : ${this.queue[this.front]}`);
    return this.queue[this.front];
};

Queue.prototype.peekRear = function () {
    if(this.queue.length == 0) {
        console.log(`Queue is underflowed`)
        return
    }
    console.log(`Rear : ${this.queue[this.rear]}`);
    return this.queue[this.rear];
};

Queue.prototype.length = function () {
    console.log(`Size : ${this.size}`);
    return this.size;
};

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
queue.peekFront();
queue.peekRear();
queue.length();
