
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import QueryAction from '~/services/notefs/query/action'

interface TargetNode extends TreeNode {
    parent: Key
}

export default class DeleteAction implements QueryAction {
    
    private readonly container: TreeContainer;

    private readonly targetKey: Key;

    
    constructor(container: TreeContainer, target: Key) {
        this.container = container;
        this.targetKey = target;
    }

    public proceed(): void {
        let target = this.getTargetNode()
        let parent = this.getParentNode(target);

        this.removeChild(parent, target);
        this.removeParent(target);
    }


    private getTargetNode(): TargetNode {
        let target = this.findNode(this.targetKey)

        if (target.parent === undefined)
            throw Error('Cant delete node without parent');

        return target as TargetNode;
    }


    private getParentNode(target: TargetNode): ParentNode {
        let parent = this.findNode(target.parent)

        if (parent.children === undefined)
            throw Error('Cant get children from leaf node')

        return parent as ParentNode;
    }

    private removeChild(parent: ParentNode, child: TargetNode) {
        let children = parent.children;

        let index = children.indexOf(child)
        if (index === -1)
            throw Error('Cant find child')

        children.splice(index, 1);
    }

    private removeParent(child: TargetNode) {
        let detachedChild: TreeNode = child;

        detachedChild.parent = undefined;
    }

    private findNode(key: Key): TreeNode {
        return this.container.find(key);
    }
}