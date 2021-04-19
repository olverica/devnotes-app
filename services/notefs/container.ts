
import QuerySelector from '~/services/notefs/query/selector';
import TreeNode, {ParentNode, Key} from '~/services/notefs/node'

export default class NodeContainer {
    
    private tree: TreeNode;

    
    constructor(root: TreeNode) {
        this.tree = root;
    }

    public root(): TreeNode {
        return this.tree;
    }

    public select(key: Key): QuerySelector {
        return new QuerySelector(this.tree, key)
    }
}