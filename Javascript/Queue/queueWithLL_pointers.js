function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.front = null;
    this.rear = null;
}

Queue.prototype.enqueue = function (data) {
    let newnode = Node(data);
    if ((this.front == null) & (this.rear == null)) {
        this.front = newnode;
        this.rear = newnode;
        console.log(`Enqueued at start: ${data}`)
    } else {
        let curr = this.front;
        while (curr) {
            curr = curr.next;
        }
        curr.next = newnode;
        this.rear = newnode;
        console.log(`Enqueued : ${data}`)
    }
};

Queue.prototype.print = function () {
    console.log(this.front)
    let ans = [];
    if (this.front == null) {
        console.log("Queue is empty");
        return;
    } else {
        let curr = this.front;
        while (curr) {
            ans.push(curr.data);
            curr = curr = next;
        }
        console.log(ans);
        return;
    }
};

queue = new Queue();
queue.enqueue(5);
queue.print();
