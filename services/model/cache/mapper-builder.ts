import CachedActionsFabric, {ForcedToFetch} from '~/services/model/cache/fabric'
import MapperBuilder from '~/services/model/mapper/builder'
import ModelCache from '~/services/model/cache/container'
import Model from '~/services/model'


export default class CachableMapperBuilder<T extends Model> extends MapperBuilder<T> {

    protected forcedToFetch: ForcedToFetch[] = [];

    protected mapperBuilder: MapperBuilder<T>;


    constructor(mapperBuilder: MapperBuilder<T>, forcedToFetch: ForcedToFetch[] = []) {
        super();
        this.mapperBuilder = mapperBuilder;
        this.forcedToFetch = forcedToFetch;
    }

    public createActions() {
        let actions = this.createBaseActions(),
            cache = this.createCache();

        let fabric = 
            new CachedActionsFabric<T>(actions, cache, this.forcedToFetch);

        return fabric.schema();
    }

    private createBaseActions() {
        return this.mapperBuilder.createActions();
    }

    private createCache() {
        return new ModelCache<T>();
    }
}