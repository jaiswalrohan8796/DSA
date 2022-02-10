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
    else{
        console.log(null)
    }
}

function postOrder(root) {
    if(root) {
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.data)
    }
}

function levelOrder(root) {
    let stack = []
    stack.push(root)
    let ans = []
    while(stack.length != 0) {
        node = stack.shift()
        ans.push(node.data)
        if(node.left) {
            stack.push(node.left)
        }
        if(node.right) {
            stack.push(node.right)
        }
    }
    console.log(ans)
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
console.log("Levelorder")
levelOrder(bt)