function preorderTraversal(root: TreeNode | null): number[] {
    // Output - array
    let arrOut: Array<number> = []
    // stack DS
    let stack: TreeNode[] = []

    // Step 1: if the root is null there is nothing to travel into tree
    if (root === null) {
        return arrOut
    }

    // Step 2: add the root elemetn into a stack 
    stack.push(root)

    //step 3: until stack goes empty we need to run a loop to process each node of the tree
    while (stack.length > 0) {
        let node: TreeNode = stack.pop()!; //popped out the first element of the stack 
        arrOut.push(node.val)
        // step 4: let's check whether the element we just popped has a left and right child 
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }

    }
    

    return arrOut
};