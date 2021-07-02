import {MapperAllAction} from '~/services/model/mapper/action'
import MapperRequest from '~/services/model/request/action'
import Model from '~/services/model'


export default class MapperAllRequest<T extends Model> extends MapperRequest<T> implements MapperAllAction<T>{

    public async proceed() {
        let path = this.origin.makePath();

        let response = await this.api
            .get(path)
            .asArray();

        return this.parseResponse(response);
    }

    private parseResponse(rawCollection: unknown[]): T[] {
        let models = [];

        for (let rawItem of rawCollection) {
            let model = this.parseModel(rawItem);
            models.push(model);
        }

        return models;
    }

    private parseModel(model: unknown) {
        return this.parser.eat(model);
    }
}