import RepositoryAction from '~/services/notefs/repos/action'
import ParentNode from '~/services/notefs/nodes/parent'
import TreeNode from '~/services/notefs/nodes/node'


export default class DeleteSelector<T extends TreeNode> implements RepositoryAction {
    
    private parent: ParentNode<T>;

    private node: T;


    constructor(parent: ParentNode<T>, node: T) {
        this.parent = parent;
        this.node = node;
    } 

    public proceed() {
        this.parent.remove(this.node);
    }
}