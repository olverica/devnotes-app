
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import QueryAction from '~/services/notefs/query/action'


export default class AppendAction implements QueryAction {
    
    private readonly container: TreeContainer;

    private readonly targetKey: Key;
    
    private readonly toKey: Key;

    
    constructor(container: TreeContainer, targetKey: Key, toKey: Key) {
        this.container = container;
        this.targetKey = targetKey;
        this.toKey = toKey;
    }

    public proceed(): void {
        let target = this.getTarget();
        let parent = this.getParent();

        this.detachNode(target);
        this.move(target, parent);
    }

    private getTarget(): TreeNode {
        let target = this.findNode(this.targetKey)
        this.validateTarget(target);

        return target;
    }

    private getParent(): ParentNode {
        let parent = this.findNode(this.toKey)
        this.validateParent(parent);

        return parent as ParentNode;
    }

    private validateTarget(target: TreeNode): void {
        let founded = 
            this.container.searchInNode(this.toKey, target);

        if (founded)
            throw Error('Cant move node it child');
    }

    private validateParent(parent: TreeNode): void {
        let hasChildren = Boolean(parent.children);

        if (!!!hasChildren)
            throw Error('Cant move node to leaf');
    }

    private detachNode(target: TreeNode) {
        if (!!!target.parent)
            throw Error('Cant detach node');

        let parent = this.findNode(target.parent) as ParentNode;
        let index = parent.children.indexOf(target)

        parent.children.splice(index, 1);
    }

    private move(target: TreeNode, parent: ParentNode) {
        parent.children.push(target)
        target.parent = parent.id;
    }

    private findNode(key: Key): TreeNode {
        return this.container.find(key);
    }
    
}