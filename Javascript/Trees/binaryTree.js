class Node {
    constructor(data) {
        (this.data = data), (this.left = null), (this.right = null);
    }
}

function inOrder(root) {
    if (root) {
        inOrder(root.left);
        console.log(root.data);
        inOrder(root.right);
    }
}

function iterativeInOrder(root) {
    let stack = []
    let res = []
    let node = root
    while(true) {
        if(node != null) {
            stack.push(node)
            node = node.left
        }
        else {
            if (stack.length == 0) break;
            node = stack.pop()
            res.push(node.data)
            node = node.right
        }
    }
    return res
}

function preOrder(root) {
    if (root) {
        console.log(root.data);
        preOrder(root.left);
        preOrder(root.right);
    }
}

function iterativePreOrder(root) {
    let res = []
    let stack = [root]
    while(stack.length != 0) {
        let node = stack.pop()
        if(node) {
            res.push(node.data)
            if(node.right) {
                stack.push(node.right)
            }
            if(node.left) {
                stack.push(node.left)
            }
        }
    }
    return res
}

function postOrder(root) {
    if (root) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.data);
    }
}

function iterativePostOrder(root) {
    let s1 = []
    let s2 = []
    s1.push(root)
    while(s1.length != 0) {
        let node = s1.pop()
        s2.push(node.data)
        if(node.left) {
            s1.push(node.left)
        }
        if(node.right) {
            s1.push(node.right)
        }
    }
    return s2.reverse()
}

function levelOrder(root) {
    let que = [];
    que.push(root);
    let ans = [];
    while (que.length != 0) {
        node = que.shift();
        ans.push(node.data);
        if (node.left) {
            que.push(node.left);
        }
        if (node.right) {
            que.push(node.right);
        }
    }
    console.log(ans);
}

function allinOneTraversal(root, mode="inOrder") {
    let preOrder = []
    let inOrder = []
    let postOrder = []
    let stack = [[root,1]]
    while(stack.length != 0) {
        let [node, num] = stack.pop()
        console.log(node.data, num)
        if(num == 1) {
            preOrder.push(node.data)
            stack.push([node, 2])
            if(node.left) {
                stack.push([node.left, 1])
            }
        }
        else if(num == 2) {
            inOrder.push(node.data)
            stack.push([node, 3])
            if(node.right) {
                stack.push([node.right, 1])
            }
        }
        else if(num == 3) {
            postOrder.push(node.data)
        }
    }
    if(mode == "preOrder") return preOrder
    if(mode == "inOrder") return inOrder
    else return postOrder
}

function searchElement(root, data) {
    let search = false;
    if (root == null) {
        console.log("Tree empty");
    }
    if (root.data === data) {
        search = true;
        console.log(root.data);
    }
    if (root.left && search === false) {
        searchElement(root.left, data);
    }
    if (root.right && search === false) {
        searchElement(root.right, data);
    }
}

bt = new Node(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(5);

// console.log("Inorder")
// inOrder(bt)
// console.log("Preorder")
// preOrder(bt)
// console.log("Postorder")
// postOrder(bt)
// console.log("Levelorder");
// levelOrder(bt);

console.log(allinOneTraversal(bt,mode="preOrder"))