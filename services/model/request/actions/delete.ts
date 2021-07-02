import {MapperDeleteAction} from '~/services/model/mapper/action'
import MapperRequest from '~/services/model/request/action'
import Model, {Key} from '~/services/model'


export default class MapperDeleteRequest<T extends Model> extends MapperRequest<T> implements MapperDeleteAction {

    public async proceed(key: Key) {
        let path = this.origin.makePath(key);

        await this.api
            .get(path)
            .asObject();
    }
}