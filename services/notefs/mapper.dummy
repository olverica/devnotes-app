import TreeActionFabric from '~/services/notefs/mapper/fabric'
import Model from '~/services/model'


export interface NoteModel extends Model {
    name: string
}


export default class TreeNodeMapper<T extends Model>  {


    protected actions: TreeActionFabric<T>;


    constructor(root: RootNode, actions?: TreeActionFabric<T>) {
        this.actions = actions || new TreeActionFabric();
        this.root = root;
    }

    public async create(data: object) {
        await this.actions
            .create(data)
            .procced(); 
    }

    public async update(data: object) {
        await this.actions
            .update()
            .proceed();
    }

    public async move(data: object) {
        await this.actions
            .move()
            .procced(); 
    }

    public async delete() {
        await this.actions
            .delete()
            .proceed();
    }
}