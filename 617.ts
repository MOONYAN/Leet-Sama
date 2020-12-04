// https://leetcode.com/problems/merge-two-binary-trees/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if (t1 === null && t2 === null) {
        return null;
    }
    let root: TreeNode | null = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
    root.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
    root.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    return root;
};