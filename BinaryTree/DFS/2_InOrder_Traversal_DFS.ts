function inorderTraversal(root: TreeNode | null): number[] {

    let arrOut: Array<number> = []
    let stack: TreeNode[] = []

    // Step 1: return [] if node is null
    if (root === null) {
        return arrOut
    }

    // Step 2:curr pointer will point to the  root element 
    let curr: TreeNode = root

    // Step 3: while the stack is not empty or curr !== null process each node and push it in the arrOut
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr)
            curr = curr.left as TreeNode
        }

        curr = stack.pop() as TreeNode;
        arrOut.push(curr.val)
        curr = curr.right as TreeNode;


    }

    return arrOut
};

// using recursive method

const inorderTraversalrecHelper = (node: TreeNode | null, arrOut: Array<number>) => {
    if (node === null) {
        return
    }

    inorderTraversalrecHelper(node.left, arrOut)
    arrOut.push(node.val)
    inorderTraversalrecHelper(node.right, arrOut)


}
function inorderTraversalrec(root: TreeNode | null): number[] {

    let arrOut: Array<number> = []

    if (root === null) {
        return arrOut
    }

    inorderTraversalrecHelper(root, arrOut)
    return arrOut
};

