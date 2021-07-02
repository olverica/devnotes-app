import {MapperGetAction} from '~/services/model/mapper/action'
import {FetchableCachedAction} from '~/services/model/cache/action'
import ModelBase, {Key} from '~/services/model'


export default class CachedGetAction<Model extends ModelBase> extends FetchableCachedAction<Model, MapperGetAction<Model>> implements MapperGetAction<Model>{

    public async proceed(key: Key) {
        if (this.notForced() && this.hasModel(key))
            return this.getCached(key);

        return await this.request(key);
    }

    private async request(key: Key) {
        let model = await this.propagate(key);
        this.save(model);

        return model;
    }

    private hasModel(key: Key) {
        return this.cache.has(key)
    }

    private getCached(key: Key) {
        return this.cache.get(key);
    }

    private propagate(key: Key) {
        return this.action.proceed(key);
    }

    private notForced() {
        return !!!this.forcedFetch
    }

    private save(model: Model) {
        this.cache.save(model);
    }
}