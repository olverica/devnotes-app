
import TreeNode, {Key} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import QueryAction from '~/services/notefs/query/action'


export interface UpdateModel {
    [index: string]: unknown
}


export default class UpdateAction implements QueryAction {
    
    private readonly container: TreeContainer;

    private readonly targetKey: Key;
    
    private readonly model: UpdateModel;

    
    constructor(container: TreeContainer, targetKey: Key, model: UpdateModel) {
        this.container = container;
        this.targetKey = targetKey;
        this.model = model;
    }

    public proceed(): void {
        this.validate();
        this.update();
    }

    private validate(): void {
        let hasId = this.model.hasOwnProperty('id');
        let hasParent = this.model.hasOwnProperty('parent');
        let hasChildren = this.model.hasOwnProperty('children');
        
        if (hasId || hasParent || hasChildren)  
            throw Error('Inccorect model type');
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
        return this.container.find(key);
    }
}