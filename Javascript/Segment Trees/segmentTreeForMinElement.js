function Node(s, e) {
    this.start = s;
    this.end = e;
    this.left = null;
    this.rigth = null;
    this.min = 0;
}

SegmentTree.prototype.createTree = function (nums, l, r) {
    if (l > r) return null;
    if (l == r) {
        let root = new Node(l, r);
        root.min = nums[l];
        return root;
    }
    let mid = Math.floor((l + r) / 2);
    let root = new Node(l, r);
    root.left = this.createTree(nums, l, mid);
    root.right = this.createTree(nums, mid + 1, r);
    root.min = Math.min(root.left.min, root.right.min);
    return root;
};

SegmentTree.prototype.update = function (index, val) {
    function updateHelper(root, pos, val) {
        if (root.start == root.end) {
            root.min = val;
            return val;
        }
        let mid = Math.floor((root.start + root.end) / 2);
        if (pos <= mid) {
            updateHelper(root, pos, val);
        }
        if (pos > mid) {
            updateHelper(root, pos, val);
        }
        root.min = Math.min(root.left.min, root.right.min);
        return root.min;
    }
    return updateHelper(this.root, index, val);
};

SegmentTree.prototype.minRange = function (i, j) {
    function rangeHelper(root, i, j) {
        if (root.start == i && root.end == j) {
            return root.min;
        }
        let mid = Math.floor((root.start + root.end) / 2);
        if (j <= mid) {
            return rangeHelper(root.left, i, j);
        }
        if (i >= mid + 1) {
            return rangeHelper(root.right, i, j);
        } else {
            return Math.min(
                rangeHelper(root.left, i, mid),
                rangeHelper(root.right, mid + 1, j)
            );
        }
    }
    return rangeHelper(this.root, i, j);
};

function SegmentTree(nums) {
    this.root = this.createTree(nums, 0, nums.length);
}

function print(root) {
    if (root == null) return;
    console.log(root.min);
    if (root.left) print(root.left);
    if (root.right) print(root.right);
}

st = new SegmentTree([1, 4, 5, 7, 10, 5, 2, 3]);
print(st.root);
console.log("====================");
console.log(st.minRange(2, 5));
