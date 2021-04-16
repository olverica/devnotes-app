
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import QueryAction from '~/services/notefs/query/action'


export interface AppendModel {
    id: Key,
    children?: TreeNode[]

    [index: string]: unknown
}


export default class AppendAction implements QueryAction {
    
    private readonly container: TreeContainer;

    private readonly parentKey: Key;
    
    private readonly model: AppendModel;

    
    constructor(container: TreeContainer, parentKey: Key, model: AppendModel) {
        this.container = container;
        this.parentKey = parentKey;
        this.model = model;
    }

    public proceed(): void {
        let created = this.createNode();
        this.append(created);
    }


    private createNode(): TreeNode {
        let node: TreeNode = this.model;
        node.parent = this.parentKey

        return node;
    }

    private append(node: TreeNode) {
        let parent = this.getParent();
        parent.children.push(node);        
    }

    private getParent(): ParentNode {
        let parent = this.findNode(this.parentKey)

        if (parent.children === undefined)
            throw Error('Cant get children from leaf node')

        return parent as ParentNode;
    }

    private findNode(key: Key): TreeNode {
        return this.container.find(key);
    }
}