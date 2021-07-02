import CachedCreateAction from '~/services/model/cache/actions/create'
import CachedDeleteAction from '~/services/model/cache/actions/delete'
import CachedUpdateAction from '~/services/model/cache/actions/update'
import CachedGetAction from '~/services/model/cache/actions/get'
import CachedAllAction from '~/services/model/cache/actions/all'
import {ActionsSchema} from '~/services/model/mapper/action'
import ModelCache from '~/services/model/cache/container'
import Model from '~/services/model'


export type ForcedToFetch = 'get'|'all';

export default class CachedActionsFabric<T extends Model> {

    private cache: ModelCache<T>;

    private baseActions: ActionsSchema<T>;

    private forcedToFetch: ForcedToFetch[];
    
    
    constructor(baseActions: ActionsSchema<T>, cache: ModelCache<T>, forcedToFetch: ForcedToFetch[] = []) {
        this.cache = cache;
        this.baseActions = baseActions
        this.forcedToFetch = forcedToFetch;
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
        let action = this.baseActions.all();
        let forced = this.isForced('all');

        return new CachedAllAction(this.cache, action, forced);
    }

    public get() {
        let action = this.baseActions.get();
        let forced = this.isForced('get');

        return new CachedGetAction(this.cache, action, forced);
    }

    public update() {
        let action = this.baseActions.update();

        return new CachedUpdateAction(this.cache, action);
    }

    public create() {
        let action = this.baseActions.create();

        return new CachedCreateAction(this.cache, action);
    }

    public delete() {
        let action = this.baseActions.delete();

        return new CachedDeleteAction(this.cache, action);
    }

    private isForced(method: ForcedToFetch) {
        let index = this.forcedToFetch.indexOf(method);
        return index !== -1;
    }
}