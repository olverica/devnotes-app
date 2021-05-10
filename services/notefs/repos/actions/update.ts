import RepositoryAction from '~/services/notefs/repos/action'
import TreeNode from '~/services/notefs/nodes/node'


export default class UpdateAction<TNode extends TreeNode, TModel extends object> implements RepositoryAction {
    
    private node: TNode;

    private model: TModel;


    constructor(node: TNode, model: TModel) {
        this.node = node;
        this.model = model;
    } 

    public proceed() {
        let $node = this.node as any;

        for (let prop in this.model)
            $node[prop] = this.model[prop]
    }
}