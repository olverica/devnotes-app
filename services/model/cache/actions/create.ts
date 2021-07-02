import {MapperCreateAction} from '~/services/model/mapper/action'
import MapperCachedAction from '~/services/model/cache/action'
import ModelBase from '~/services/model'


export default class CachedCreateAction<Model extends ModelBase> extends MapperCachedAction<Model, MapperCreateAction<Model>> implements MapperCreateAction<Model>{

    public async proceed(data: object) {
        let created = await this.propagate(data);
        this.save(created);

        return created;
    }

    private save(data: Model) {
        return this.cache.save(data);
    }

    private propagate(data: object) {
        return this.action.proceed(data);
    }
}