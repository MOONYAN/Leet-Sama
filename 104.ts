// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import { TreeNode } from "./shared/tree-node";

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    } else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}