import QueryAction from '~/services/notefs/query/action'
import NodeTreeSeacher from '~/services/notefs/searchers/node'
import ParentTreeSeacher from '~/services/notefs/searchers/parent'
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


export default class DeleteAction implements QueryAction {
    
    private readonly root: TreeNode;

    private readonly targetKey: Key;

    
    constructor(root: TreeNode, target: Key) {
        this.targetKey = target;
        this.root = root;
    }

    public proceed(): void {
        let target = this.getTargetNode()
        let parent = this.getParentNode();

        this.removeChild(parent, target);
    }

    private getTargetNode(): TreeNode {
        let seacher = new NodeTreeSeacher(this.root);
        let node = seacher.findOrFail(this.targetKey);

        return node;
    }

    private getParentNode(): ParentNode {
        let seacher = new ParentTreeSeacher(this.root);
        let node = seacher.findOrFail(this.targetKey);

        return node;
    }

    private removeChild(parent: ParentNode, child: TreeNode) {
        let children = parent.children;

        let index = children.indexOf(child)
        if (index === -1)
            throw Error('Cant find child')

        children.splice(index, 1);
    }
}