import {MapperDeleteAction} from '~/services/model/mapper/action'
import MapperCachedAction from '~/services/model/cache/action'
import ModelBase, {Key} from '~/services/model'


export default class CachedDeleteAction<Model extends ModelBase> extends MapperCachedAction<Model, MapperDeleteAction> implements MapperDeleteAction{

    public async proceed(key: Key) {
        this.propagate(key);

        if (this.hasModel(key))
            this.remove(key);
    }

    private hasModel(key: Key) {
        return this.cache.has(key)
    }

    private remove(key: Key) {
        return this.cache.remove(key);
    }

    private propagate(key: Key) {
        return this.action.proceed(key);
    }
}