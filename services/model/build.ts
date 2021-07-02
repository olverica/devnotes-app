import CachableMapperBuilder from '~/services/model/cache/mapper-builder'
import RequestMapperBuidler from '~/services/model/request/mapper-builder'
import {ForcedToFetch} from '~/services/model/cache/fabric'
import ModelParser from '~/services/model/parser'
import Model from '~/services/model'
import API from '~/services/api'


export default function build<T extends Model>(schema: MapperSchema<T>) {
    let builder = new MapperConfigurableBuilder(schema); 

    return builder.build();
}

export interface MapperSchema<T extends Model> {
    path: string;
    parser: ModelParser<T>;
    forcedToFetch?: ForcedToFetch[]
    api?: API;
}

export class MapperConfigurableBuilder<T extends Model> {

    private schema: MapperSchema<T>;


    constructor(schema: MapperSchema<T>) {
        this.schema = schema;
    }

    public build() {
        return this.makeCachableMapper().build()
    }

    private makeCachableMapper() {
        let requestMapper = this.makeRequestMapper();

        return new CachableMapperBuilder<T>(
            requestMapper,
            this.schema.forcedToFetch
        );
    }

    private makeRequestMapper() {
        return new RequestMapperBuidler<T>(
            this.schema.path,
            this.schema.parser,
            this.schema.api
        );
    }
}