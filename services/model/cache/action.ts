import ModelCache from '~/services/model/cache/container'
import ModelBase from '~/services/model'


export default abstract class MapperCachedAction<Model extends ModelBase, Action> {

    protected cache: ModelCache<Model>;

    protected action: Action;

    
    constructor(cache: ModelCache<Model>, action: Action) {
        this.cache = cache;
        this.action = action;
    }
}

export abstract class FetchableCachedAction<Model extends ModelBase, Action> extends MapperCachedAction<Model, Action>{
    
    protected forcedFetch: boolean;


    constructor(cache: ModelCache<Model>, action: Action, forcedFetch: boolean = false) {
        super(cache, action);
        this.forcedFetch = forcedFetch;
    }
}