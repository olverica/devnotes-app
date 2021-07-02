import Model from '~/services/model'


export  interface NodeVisitor {
    node(node: TreeNode): void;
    parent(node: ParentNode<TreeNode>): void;
    proxy(node: ProxyNode<TreeNode>): void;
}


export default interface TreeNode extends Model {
    accept(vistor: NodeVisitor): void;
}   


export interface ProxyNode<Child extends TreeNode = TreeNode> extends TreeNode {
    node: Child;
}

export interface ParentNode<Child extends TreeNode = TreeNode> extends TreeNode {
    children: Child[];
    
    attach(node: Child): void;
    detach(node: Child): void;
}