import RepositoryAction from '~/services/notefs/repos/action'
import TreeNode from '~/services/notefs/nodes/node'


export default class GetAction<T extends TreeNode> implements RepositoryAction {

    private node: T;


    constructor(node: T) {
        this.node = node;
    }
    
    public proceed(): T {
        return this.node;
    }
}