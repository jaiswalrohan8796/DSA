//https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/

nextLargerElement(arr, n);
{
    // code here
    let stack = [];
    let ans = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length != 0) {
            ans[i] = stack[stack.length - 1];
        } else {
            ans[i] = -1;
        }
        stack.push(arr[i]);
    }
    return ans;
}
