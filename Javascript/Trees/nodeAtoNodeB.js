//https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/


var getDirections = function(root, startValue, destValue) {
    function findPath(node, path, target) {
        if(!node) return false
        if(node.val == target) {
            return true
        }
        let left = findPath(node.left, path, target)
        if(left) {
            path.unshift("L")
            return true
        }
        let right = findPath(node.right, path, target)
        if(right) {
            path.unshift("R")
            return true
        }
        return false
    }
    let startPath = []
    findPath(root, startPath, [startValue])
    let endPath = []
    findPath(root, endPath, destValue)
    
    while(startPath[0] == endPath[0]) {
        startPath.shift()
        endPath.shift()
    }
    let ans = "U".repeat(startPath.length)
    ans += endPath.join("")
    return ans
}
    
