class Node {
    constructor(data) {
        this.data = data,
        this.left = null,
        this.right = null
    }
}


function inOrder(root) {
    if(root) {
        inOrder(root.left)
        console.log(root.data)
        inOrder(root.right)
    }
}

function preOrder(root) {
    if(root) {
        console.log(root.data)
        preOrder(root.left)
        preOrder(root.right)
    }
}

function postOrder(root) {
    if(root) {
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.data)
    }
}

bt = new Node(1)
bt.left = new Node(2)
bt.right = new Node(3)
bt.left.left = new Node(4)
bt.left.right = new Node(5)

console.log("Inorder")
inOrder(bt)
console.log("Preorder")
preOrder(bt)
console.log("Postorder")
postOrder(bt)
