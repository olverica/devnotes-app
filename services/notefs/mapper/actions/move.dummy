import {MapperUpdateAction} from '~/services/model/mapper/action'
import TreeMapperAction from '~/services/notefs/mapper/action'
import Model from '~/services/model'


export default class TreeMoveAction<T extends Model> extends TreeMapperAction<MapperUpdateAction<T>>  {

    public async proceed(node: T, newParent: T) {
        await this.propagate(node, newParent);
        
        this.detach(node);
        this.attach(node, newParent)
    }


    private propagate(node: T, newParent: T) {
        let request = {
            parent: newParent.id
        }

        return this.action.proceed(node.id, request);
    }

    private detach(node: T) {
        let parent  = this.foundParent(node);

        parent.detach(node);
    }

    private attach(node: T, parent: T) {
        parent.attach(node);
    }

    private foundParent(node: T) {
        return this.root.foundParent(node.id);
    }
}