const recoverTree = function (root) {

	let x = null,		y = null,

		prev = null;

	const dfs = (node) => {

		if (!node) return;

		dfs(node.left);

		if (prev && node.val < prev.val) {

			if (x == null) x = prev;

			y = node;

		}

		prev = node;

		dfs(node.right);

	};

	dfs(root);

	[x.val, y.val] = [y.val, x.val];

};
