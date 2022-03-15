class Node {
    constructor(data) {
        (this.data = data), (this.left = null), (this.right = null);
    }
}

bt = new Node(8);
bt.left = new Node(3);
bt.right = new Node(10);
bt.left.left = new Node(1);
bt.left.right = new Node(6);
bt.left.right.left = new Node(4);
bt.left.right.right = new Node(7);
bt.right.left = new Node(14);

function findInBST(root,target) {
    let currNode = root
    while(currNode != null && currNode.data != target) {
        if(target < currNode.data) {
            currNode = currNode.left
        }
        else {
            currNode = currNode.right
        }
    }
    return currNode;
}

function findMin(root) {
    let curr = root
    if(curr.left == null) {
        return curr
    }
    else {
        return findMin(curr.left)
    }
}

function findMax(root) {
    let curr = root
    if(curr.right == null) {
        return curr
    }
    else {
        return findMax(curr.right)
    }
}

function insert(root,value) {
    if(root == null) {
        root.left = new Node(value)
    }
    else {
        if(value < root.data) {
            if(root.left == null) {
                root.left = new Node(value)
            }
            else {
                insert(root.left,value)
            }
        }
        else {
            if(root.right == null) {
                root.right = new Node(value)
            }
            else {
                insert(root.right,value)
            }
        }
    }
}

console.log(findInBST(bt,7))
console.log(findMin(bt))
console.log(findMax(bt)) 
insert(bt,14)
console.log(findMax(bt))