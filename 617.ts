// https://leetcode.com/problems/merge-two-binary-trees/

import { TreeNode } from "./shared/tree-node";

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if (t1 === null && t2 === null) {
        return null;
    }
    let root: TreeNode | null = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
    root.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
    root.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    return root;
}