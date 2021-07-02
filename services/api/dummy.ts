import LaravelResponse from '~/services/api/responses/laravel'
import RequestPath from '~/services/api/dummy/path'
import ModelList from '~/services/api/dummy/model-list'
import API from '~/services/api'


export default class DummyApi implements API {
    
    private root: Map<string, ModelList> = new Map();
    

    public async get(path: string): Promise<LaravelResponse> {
        let models = this.tryFindModelList(path);
        if (models) {
            let array = models.toArray();
            return this.createResponse(array);
        }

        let {id, model} = this.splitPath(path);
        let founded = this.findModelList(model)
                          .get(id);

        return this.createResponse(founded);
    }

    public async patch(path: string, body: object): Promise<LaravelResponse> {
        let {id, model} = this.splitPath(path);
        let updated = this.findModelList(model)
                          .update(id, body);
        
        return this.createResponse(updated);
    }

    public async post(path: string, body: object): Promise<LaravelResponse> {
        let models = this.tryFindModelList(path);
        if (!!!models)
            models = this.createModelList(path);

        let model = models.append(body);
        return this.createResponse(model);
    }

    public async delete(path: string): Promise<void> {
        let {id, model} = this.splitPath(path);

        this.findModelList(model)
            .remove(id);
    }
    
    private findModelList(path: string): ModelList {
        let founded = this.root.get(path);
        if (founded)
            return founded;
        
        throw Error('Incorrect path');
    }

    private tryFindModelList(path: string): ModelList|null {
        let founded = this.root.get(path);
        if (founded)
            return founded;

        return null;
    }

    private createModelList(path: string) {
        let models = new ModelList();
        this.root.set(path, models);

        return models;
    }

    private createResponse(data: unknown) {
        return new LaravelResponse({ data });
    } 

    private splitPath(path: string) {
        return new RequestPath(path);
    }
}