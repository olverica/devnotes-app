import {MapperCreateAction} from '~/services/model/mapper/action'
import TreeMapperAction from '~/services/notefs/mapper/action'
import TreeNode from '~/services/notefs/node'
import Model from '~/services/model'

export default class TreeCreateAction<T extends TreeNode> extends TreeMapperAction<MapperCreateAction<T>>  {

    public async proceed(data: object) {
        let created = await this.propagate(data);
        this.appendToTree(created);

        return created;
    }

    private appendToTree(node: T) {
        let parent = this.foundParent(node.id);

        parent.attach(node);
    }

    private propagate(data: object) {
        return this.action.proceed(data);
    }
}