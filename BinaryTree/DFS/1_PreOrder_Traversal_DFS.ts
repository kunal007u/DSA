/*
##144:  Binary Tree Preorder Traversal

--> Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1, null, 2, 3]
Output: [1, 2, 3]

    1
     \
      2
     /
    3

Example 2:
Input: root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]
Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]

         1
       /   \
      2     3
     / \     \
    4   5     8
       / \   /
      6   7 9

Example 3:
Input: root = []
Output: []


Example 4:
Input: root = [1]
Output: [1]



Constraints:

The number of nodes in the tree is in the range[0, 100].
- 100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively ?
*/

/*
         1
       /   \
      2     3
     / \     \
    4   5     8
       / \   /
      6   7 9
*/

// Using iterative method
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

// Using recursion method
let preorderTraversalRecHelper = (node: TreeNode | null, arrOut: Array<number> )=>{

    if(node === null){
        return 
    }

    arrOut.push(node.val)
    preorderTraversalRecHelper(node.left, arrOut );
    preorderTraversalRecHelper(node.right, arrOut );

}
function preorderTraversalRec(root: TreeNode | null): number[] {
    // Output - array
    let arrOut: Array<number> = []

    if(root === null){
        return arrOut
    }

    preorderTraversalRecHelper(root, arrOut)

    return arrOut
};