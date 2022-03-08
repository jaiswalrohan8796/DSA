class Node {
    constructor(data) {
        (this.data = data), (this.left = null), (this.right = null);
    }
}

bt = new Node(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(5);


function searchElement(root,target) {
    if(root == null) {
        console.log("Tree Empty")
        return -1
    }
    que = []
    que.push(root)
    while(que.length != 0) {
        let node = que.shift()
        if(target == node.data) {
            return 1
        }
        if(node.left != null) {
            que.push(node.left)
        }
        if(node.right != null) {
            que.push(node.right)
        }
    }
    return -1
}

let flag = searchElement(bt,7)
console.log(flag)