import TreeNode, {Key} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import QueryAction from '~/services/notefs/query/action'

export default class GetAction implements QueryAction {
    
    private readonly container: TreeContainer;

    private readonly target: Key;

    
    constructor(container: TreeContainer, target: Key) {
        this.container = container;
        this.target = target;
    }

    public proceed(): TreeNode {
        let founded = 
            this.container.find(this.target);

        return founded;
    }
}