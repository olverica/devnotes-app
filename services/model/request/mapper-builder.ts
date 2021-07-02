import RequestFabric from '~/services/model/request/fabric'
import MapperBuilder from '~/services/model/mapper/builder'
import MapperOrigin from '~/services/model/mapper/origin'
import ModelParser from '~/services/model/parser'
import LaravelAPI from '~/services/api/laravel'
import Model from '~/services/model'
import API from '~/services/api'


import {ActionsSchema} from '~/services/model/mapper/action'


export default class RequestMapperBuidler<T extends Model> extends MapperBuilder<T> {

    private api: API;
    
    private path: string;

    private parser: ModelParser<T>;
    

    constructor(path: string, parser: ModelParser<T>, api?: API) {
        super();
        this.api = api || new LaravelAPI();
        this.path = path;
        this.parser = parser;
    }

    public createActions(): ActionsSchema<T> {
        let origin = this.createOrigin();

        let fabric = 
            new RequestFabric(origin, this.parser, this.api);

        return fabric.schema();
    }

    private createOrigin() {
        return new MapperOrigin(this.path)
    }
}