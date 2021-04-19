import QueryAction from '~/services/notefs/query/action'
import TreeNode, {Key} from '~/services/notefs/node'
import TreeNodeSearcher from '~/services/notefs/searchers/node'

export default class GetAction implements QueryAction {
    
    private readonly root: TreeNode;

    private readonly target: Key;

    
    constructor(root: TreeNode, target: Key) {
        this.root = root;
        this.target = target;
    }

    public proceed(): TreeNode {
        let seacher = new TreeNodeSearcher(this.root);
        let founded = seacher.find(this.target);

        return founded;
    }
}