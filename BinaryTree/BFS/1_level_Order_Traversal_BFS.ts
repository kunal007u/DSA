/*
##102 --> Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3, 9, 20, null, null, 15, 7]
Output: [[3], [9, 20], [15, 7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range[0, 2000].
- 1000 <= Node.val <= 1000
*/


function levelOrder(root: TreeNode | null): number[][] {
    let arrayOut: Array<Array<number>> = []
    let queue: Array<TreeNode> = []

    if (root === null) {
        return []
    }

    queue.push(root)

    // a = [[]]
    // q =[9, 20]
    // L = []
    // n = 3
    // 
    while (queue.length > 0) {
        let level: Array<number> = []
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node: TreeNode = queue.shift()!
            level.push(node.val)

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        arrayOut.push(level)

    }

    return arrayOut
};