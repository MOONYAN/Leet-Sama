// https://leetcode.com/problems/invert-binary-tree/

import { TreeNode } from './shared/tree-node';

function swap(root: TreeNode) {
    const tmp = root.left
    root.left = root.right;
    root.right = tmp;
}

function invertTree(root: TreeNode | null): TreeNode | null {

    if (root === null) {
        return null;
    }
    swap(root);
    invertTree(root.right);
    invertTree(root.left);
    return root;
}