
export type Key = string|number;

export interface ParentNode<T extends TreeNode = TreeNode> extends TreeNode {
    children: T[]
}

export default interface TreeNode {
    parent?: ParentNode<TreeNode>
    name: string
    id: Key
}   