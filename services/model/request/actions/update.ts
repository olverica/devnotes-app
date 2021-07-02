import {MapperUpdateAction} from '~/services/model/mapper/action'
import MapperRequest from '~/services/model/request/action'
import Model, {Key} from '~/services/model'


export default class MapperUpdateRequest<T extends Model> extends MapperRequest<T> implements MapperUpdateAction<T>{

    public async proceed(key: Key, data: object) {
        let path = this.origin.makePath(key);

        let response = await this.api
            .patch(path, data)
            .asObject();

        return this.parseResponse(response);
    }

    private parseResponse(response: unknown) {
        return this.parser.eat(response);
    }
}