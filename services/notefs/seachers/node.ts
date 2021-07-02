import TreeNode, {ParentNode, ProxyNode, NodeVisitor} from '~/services/notefs/node'
import {Key} from '~/services/model'


export class NodeSeacher implements NodeVisitor {

    private searchingId: Key;

    private foundedNode: TreeNode|null;


    constructor(searchingId: Key) {
        this.searchingId = searchingId;
        this.foundedNode = null;
    }

    public founded() {
        return this.foundedNode;
    }

    public node(node: TreeNode) {
        this.check(node)
    }

    public proxy(proxy: ProxyNode) {
        if (this.check(proxy))
            return;

        this.check(proxy.node);
    }

    public parent(parent: ParentNode) {
        if (this.check(parent))
            return;

        for (let node of parent.children) {
            if (this.check(node))
                return;

            node.accept(this);
        }
    }

    private check(node: TreeNode): boolean {
        if (node.id !== this.searchingId)
            return false;

        this.foundedNode = node;
        return true;
    }
}