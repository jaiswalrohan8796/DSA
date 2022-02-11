class Node {
    constructor(data) {
        this.data = data,
        this.left = null,
        this.right = null
    }
}


bt = new Node(1)
bt.left = new Node(2)
bt.right = new Node(3)
bt.left.left = new Node(4)
bt.left.right = new Node(5)
bt.right.left = new Node(6)
bt.right.right = new Node(7)


let maxm = Number.MIN_VALUE
function findMax(root) {
    if(!root) {
        return null
    }
    if(root.data > maxm) {
        maxm = root.data
    }
    if(root.left) {
        findMax(root.left)
    }
    if(root.right) {
        findMax(root.right)
    }
    return maxm
}

console.log(findMax(bt))