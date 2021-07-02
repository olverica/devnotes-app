import {MapperCreateAction} from '~/services/model/mapper/action'
import TreeMapperAction from '~/services/notefs/mapper/action'
import Model from '~/services/model'


export default class TreeCreateAction<T extends Model> extends TreeMapperAction<MapperCreateAction<T>>  {

    public async proceed(data: object) {
        let created = await this.propagate(data);
        this.appendToTree(created);

        return created;
    }

    private appendToTree(node: T) {
        let parent = this.foundParent(node);

        parent.attach(node);
    }

    private foundParent(node: T) {
        return this.root.foundParent(node.id);
    }

    private propagate(data: object) {
        return this.action.proceed(data);
    }
}