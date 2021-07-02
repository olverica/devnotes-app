import {MapperUpdateAction} from '~/services/model/mapper/action'
import MapperCachedAction from '~/services/model/cache/action'
import ModelBase, {Key} from '~/services/model'


export default class CachedUpdateAction<Model extends ModelBase> extends MapperCachedAction<Model, MapperUpdateAction<Model>> implements MapperUpdateAction<Model>{

    public async proceed(key: Key, data: object) {
        let updated = await this.propagate(key, data);
        this.updateCache(key, updated);
        
        return updated;
    }

    private updateCache(key: Key, data: Model) {
        return this.cache.update(key, data);
    }

    private propagate(key: Key, data: object) {
        return this.action.proceed(key, data);
    }
}