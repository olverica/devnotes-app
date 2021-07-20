import TreeNode, {ParentNode, ProxyNode, NodeVisitor} from '~/services/notefs/node'
import {Key} from '~/services/model'


export default class ParentSeacher implements NodeVisitor {

    private searchingId: Key;

    private foundedNode: ParentNode|null;

    private previousParent: ParentNode|null;


    constructor(searchingId: Key) {
        this.searchingId = searchingId;
        this.previousParent = null;
        this.foundedNode = null;
    }

    public founded() {
        return this.foundedNode;
    }

    public node(node: TreeNode) {
        this.check(node)
    }

    public proxy(proxy: ProxyNode) {
        this.check(proxy);
        this.check(proxy.node);
    }

    public parent(parent: ParentNode) {
        if (this.check(parent) || this.checkParentChildren(parent))
            return;

        this.proposeAccept(parent);
    }

    private proposeAccept(parent: ParentNode) {
        for (let node of parent.children)
            node.accept(this);
    }

    private checkParentChildren(parent: ParentNode): boolean {
        this.previousParent = parent;

        for (let node of parent.children) {
            if (this.check(node))
                return true;
        }

        return false;
    }

    private check(node: TreeNode): boolean {
        if (node.id !== this.searchingId)
            return false;

        this.foundedNode = this.previousParent;
        return true;
    }
}