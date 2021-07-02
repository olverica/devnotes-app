import MapperCreateRequest from '~/services/model/request/actions/create'
import MapperDeleteRequest from '~/services/model/request/actions/delete'
import MapperUpdateRequest from '~/services/model/request/actions/update'
import MapperGetRequest from '~/services/model/request/actions/get'
import MapperAllRequest from '~/services/model/request/actions/all'
import MapperOrigin from '~/services/model/mapper/origin'
import ModelParser from '~/services/model/parser'
import Model from '~/services/model'
import API from '~/services/api'


export default class RequestFabric<T extends Model> {

    private origin: MapperOrigin; 

    private parser: ModelParser<T>;
    
    private api: API;

    constructor(origin: MapperOrigin, parser: ModelParser<T>, api: API) {
        this.origin = origin;
        this.parser = parser;
        this.api = api;
    }

    public schema() {
        return {
            update: this.update,
            create: this.create,
            delete: this.delete,
            all: this.all,
            get: this.get,
        }
    }

    public all() {
        return new MapperAllRequest(this.origin, this.parser, this.api);
    }

    public get() {
        return new MapperGetRequest(this.origin, this.parser, this.api);
    }

    public update() {
        return new MapperUpdateRequest(this.origin, this.parser, this.api);
    }

    public create() {
        return new MapperCreateRequest(this.origin, this.parser, this.api);
    }

    public delete() {
        return new MapperDeleteRequest(this.origin, this.parser, this.api);
    }
}