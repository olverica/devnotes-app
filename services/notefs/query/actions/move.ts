import QueryAction from '~/services/notefs/query/action'
import NodeTreeSearcher from '~/services/notefs/searchers/node'
import ParentTreeSearcher from '~/services/notefs/searchers/parent';
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


export default class AppendAction implements QueryAction {
    
    private readonly parentSeacher: ParentTreeSearcher;

    private readonly nodeSeacher: NodeTreeSearcher;

    private readonly targetKey: Key;
    
    private readonly toKey: Key;

    private readonly root: TreeNode;
    
    
    constructor(root: TreeNode, targetKey: Key, toKey: Key) {
        this.parentSeacher = new ParentTreeSearcher(root);
        this.nodeSeacher = new NodeTreeSearcher(root);
        
        this.targetKey = targetKey;
        this.toKey = toKey;

        this.root = root;
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
        let seacher = new NodeTreeSearcher(target);
        let founded = seacher.find(this.toKey);

        if (founded)
            throw Error('Cant move node it child');
    }

    private validateParent(parent: TreeNode): void {
        let children = parent.children;
        let hasChildren = Boolean(children);

        if (!!!hasChildren)
            throw Error('Cant move node to leaf');
    }

    private detachNode(target: TreeNode) {
        let parent = this.findNodeParent(target.id);
        let index = parent.children.indexOf(target)

        parent.children.splice(index, 1);
    }

    private move(target: TreeNode, parent: ParentNode) {
        parent.children.push(target)
    }

    private findNode(key: Key): TreeNode {
        return this.nodeSeacher.findOrFail(key);
    }

    private findNodeParent(key: Key): ParentNode {
        return this.parentSeacher.findOrFail(key);
    }
}