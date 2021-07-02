import {MapperGetAction} from '~/services/model/mapper/action'
import MapperRequest from '~/services/model/request/action'
import Model, {Key} from '~/services/model'


export default class MapperGetRequest<T extends Model> extends MapperRequest<T> implements MapperGetAction<T>{

    public async proceed(key: Key) {
        let path = this.origin.makePath(key);

        let response = await this.api
            .get(path)
            .asObject();

        return this.parseResponse(response);
    }

    private parseResponse(response: unknown) {
        return this.parser.eat(response);
    }
}