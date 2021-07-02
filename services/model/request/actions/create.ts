import {MapperCreateAction} from '~/services/model/mapper/action'
import MapperRequest from '~/services/model/request/action'
import Model from '~/services/model'


export default class MapperCreateRequest<T extends Model> extends MapperRequest<T> implements MapperCreateAction<T> {

    public async proceed(data: object) {
        let path = this.origin.makePath();

        let response = await this.api
            .post(path, data)
            .asObject();

        return this.parseResponse(response);
    }

    private parseResponse(response: unknown) {
        return this.parser.eat(response);
    }
}