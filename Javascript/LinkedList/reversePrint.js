
function reversePrint(node) {
    if (!node) return;
    reversePrint(node.next);
    console.log(node.val);
}