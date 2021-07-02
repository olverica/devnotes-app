import ApiQueryBuilder from '~/services/api/query/builder'
import MapperOrigin from '~/services/model/mapper/origin'
import ModelParser from '~/services/model/parser'
import Model from '~/services/model'
import API from '~/services/api'


export default abstract class MapperAction<T extends Model> {

    protected origin: MapperOrigin;

    protected parser: ModelParser<T>;
    
    protected api: ApiQueryBuilder;


    constructor(origin: MapperOrigin, parser: ModelParser<T>, api: API) {
        this.origin = origin;
        this.parser = parser;
        this.api = new ApiQueryBuilder(api);
    }
}