import {MapperDeleteAction} from '~/services/model/mapper/action'
import TreeMapperAction from '~/services/notefs/mapper/action'
import Model, {Key} from '~/services/model'


export default class TreeDeleteAction<T extends Model> extends TreeMapperAction<MapperDeleteAction> {

    public async proceed(node: T) {
        await this.propagate(node);
        
        this.removeFromTree(node);
    }

    private propagate(node: T) {
        return this.action.proceed(node.id);
    }

    private removeFromTree(node: T) {
        let parent = this.foundParent(node);

        parent.detach(node);
    }

    private foundParent(node: T) {
        return this.root.foundParent(node.id);
    }
}