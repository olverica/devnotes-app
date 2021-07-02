import {MapperAllAction} from '~/services/model/mapper/action'
import {FetchableCachedAction} from '~/services/model/cache/action'
import ModelBase from '~/services/model'


export default class CachedAllAction<Model extends ModelBase> extends FetchableCachedAction<Model, MapperAllAction<Model>> implements MapperAllAction<Model>{

    public async proceed() {
        if (this.hasSaved() && this.notForced())
            return this.getSaved();

        return await this.request();
    }

    private async request() {
        let models = await this.propagate();
        this.save(models);
        
        return models;
    }

    private save(models: Model[]) {
        for (let model of models)
            this.cache.save(model);
    }

    private notForced() {
        return !!!this.forcedFetch
    }

    private hasSaved() {
        return !!!this.cache.empty();
    }

    private getSaved() {
        return this.cache.saved();
    }

    private propagate() {
        return this.action.proceed();
    }
}