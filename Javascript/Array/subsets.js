//https://leetcode.com/problems/subsets/

function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}


function subsets(nums) {
	let res = []
    let ss = []
    function dfs(i) {
        if(i >= nums.length) {
            res.push([...ss])
            return
        }
        ss.push(nums[i])
        //take the element
        dfs(i+1)
        //dont take the element
        ss.pop()
        dfs(i+1)
    }
    dfs(0)
    return res
}
