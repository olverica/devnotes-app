import TreeNode, {ProxyNode, NodeVisitor} from '~/services/notefs/node'
import {Key} from '~/services/model'


export type GarbageChild = TreeNode;

export default class GarbageNode implements ProxyNode<GarbageChild> {

    public id: Key;
    
    public node: GarbageChild;
    
    public deletedAt: string;


    constructor(id: Key, deletedAt: string, node: GarbageChild) {
        this.id = id;
        this.node = node;
        this.deletedAt = deletedAt;
    }

    public accept(visitor: NodeVisitor) {
        visitor.node(this);
    }
}