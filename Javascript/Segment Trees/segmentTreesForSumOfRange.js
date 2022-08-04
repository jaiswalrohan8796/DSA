//Node structure
class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.total = 0;
        this.left = null;
        this.right = null;
    }
}

//Segment Tree
class NumArray {
    constructor(nums) {
        /**
         *
         * @param {Array} nums : an array of integers
         * @param {Number} l : start index of array
         * @param {Number} r : last index of array
         * @returns {Node}: root node of Segment Tree
         */
        function createNums(nums, l, r) {
            //exception case (terminate)
            if (l > r) return null;
            //base case
            if (l == r) {
                let root = new Node(l, r);
                root.total = nums[l];
                return root;
            }
            //calc mid
            let mid = Math.floor((l + r) / 2);
            let root = new Node(l, r);
            //attach left subtree
            root.left = createNums(nums, l, mid);
            //attach right subtree
            root.right = createNums(nums, mid + 1, r);
            //calc total from both children
            root.total = root.left.total + root.right.total;
            return root;
        }
        this.root = createNums(nums, 0, nums.length - 1);
    }
    update(pos, val) {
        /**
         *
         * @param {Node} root : Node at which operations happens
         * @param {Number} pos : index at which to update
         * @param {Number} val : value to insert
         * @returns
         */
        function updateVal(root, pos, val) {
            //base case
            if (root.start == root.end) {
                root.total = val;
                return val;
            }
            let mid = Math.floor((root.start + root.end) / 2);
            //if pos falls in left subtree
            if (pos <= mid) {
                updateVal(root.left, pos, val);
            }
            //if pos falls in rigth subtree
            if (pos > mid) {
                updateVal(root.right, pos, val);
            }
            //update the total
            root.total = root.left.total + root.right.total;
            return root.total;
        }

        return updateVal(this.root, pos, val);
    }
    rangeSum(i, j) {
        /**
         *
         * @param {Node} root : Node at which operation starts
         * @param {Number} i : left index of range
         * @param {Number} j : right index of range
         * @returns {Number} : sum of the range
         */
        function rangeSumHelper(root, i, j) {
            //base case
            if (root.start == i && root.end == j) {
                return root.total;
            }
            let mid = Math.floor((root.start + root.end) / 2);
            //if end of range falls in left subtree
            if (j <= mid) {
                return rangeSumHelper(root.left, i, j);
            }
            //if start of range falls in right subtree
            if (i >= mid + 1) {
                return rangeSumHelper(root.right, i, j);
            } else {
                //calculate sum from both the subtrees
                return (
                    rangeSumHelper(root.left, i, mid) +
                    rangeSumHelper(root.right, mid + 1, j)
                );
            }
        }
        return rangeSumHelper(this.root, i, j);
    }
}

function print(root) {
    if (root == null) return;
    console.log(root.total);
    if (root.left) print(root.left);
    if (root.right) print(root.right);
}

let na = new NumArray([1, 2, 3, 4, 5, 6, 7, 8]);
print(na.root);
na.update(0, 10);
console.log("=========================");
print(na.root);
console.log("=========================");
console.log(na.rangeSum(1, 3));
