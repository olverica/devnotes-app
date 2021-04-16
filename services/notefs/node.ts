
export type Key = number|string;


export interface LeafNode {
    id: Key,
    parent?: Key,

    [index: string]: unknown
}

export interface ParentNode extends TreeNode {
    children: TreeNode[]
}

export default interface TreeNode extends LeafNode {
    children?: TreeNode[]
}

