import {MapperUpdateAction} from '~/services/model/mapper/action'
import TreeMapperAction from '~/services/notefs/mapper/action'
import Model from '~/services/model'


export default class TreeUpdateAction<T extends Model> extends TreeMapperAction<MapperUpdateAction<T>>{

    public async proceed(node: T, data: object) {
        let updated = await this.propagate(node, data);

        this.updateNode(node, updated);
    }

    private propagate(node: T, data: object) {
        return this.action.proceed(node.id, data);
    }
    
    private updateNode(node: T, request: object) {
        Object.assign(node, request);
    }
}