
import QueryAction from '~/services/notefs/query/action'
import TreeNode, {Key} from '~/services/notefs/node'
import TreeNodeSearcher from '~/services/notefs/searchers/node'


export interface UpdateModel {
    [index: string]: unknown
}


export default class UpdateAction implements QueryAction {
    
    private readonly seacher: TreeNodeSearcher;

    private readonly targetKey: Key;
    
    private readonly model: UpdateModel;

    
    constructor(root: TreeNode, targetKey: Key, model: UpdateModel) {
        this.seacher = new TreeNodeSearcher(root);
        this.targetKey = targetKey;
        this.model = model;
    }

    public proceed(): void {
        this.validate();
        this.update();
    }

    private validate(): void {
        let hasId = this.model.hasOwnProperty('id');
        let hasChildren = this.model.hasOwnProperty('children');
        
        if (hasId || hasChildren)  
            throw Error('Inccorect model. Cant edit id or children directly');
    }

    private update(): void {
        let node = this.getTarget();
        let entries = Object.entries(this.model);

        for (let [property, value] of  entries)
            node[property] = value;
    }

    private getTarget() {
        return this.findNode(this.targetKey);
    }
    
    private findNode(key: Key): TreeNode {
        return this.seacher.find(key)
    }
}