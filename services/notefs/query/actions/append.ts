import QueryAction from '~/services/notefs/query/action'
import TreeNodeSearcher from '~/services/notefs/searchers/node'
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


export interface AppendModel {
    id: Key,
    children?: TreeNode[]

    [index: string]: unknown
}


export default class AppendAction implements QueryAction {
    
    private readonly node: TreeNode;
    
    private readonly searcher: TreeNodeSearcher;
    
    private readonly parentKey: Key;

    
    constructor(root: TreeNode, parentKey: Key, node: TreeNode) {
        this.searcher = new TreeNodeSearcher(root);
        this.parentKey = parentKey;
        this.node = node;

    }

    public proceed(): void {
        let parent = this.getParent();

        parent.children.push(this.node);       
    }

    private getParent(): ParentNode {
        let parent = this.findNode(this.parentKey)

        if (parent.children === undefined)
            throw Error('Cant get children from leaf node')

        return parent as ParentNode;
    }

    private findNode(key: Key): TreeNode {
        return this.searcher.findOrFail(key)
    }
}