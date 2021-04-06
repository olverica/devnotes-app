
import API from '~/services/API'
import RestAPI from '~/services/RestAPI'


abstract class ModelRepository<Model, CreateRequest extends object, UpdateRequest extends object> {

    private readonly api: API;

    protected readonly path: string = '';    

    constructor(api: API = new RestAPI()) {
        this.api = api;
    }

    public async find(key: number|string): Promise<Model> {
        let path = this.createPath(key);

        let response = await this.api.find(path);
        
        let model = this.convertResponse(response);

        return model;
    }

    public async create(request: CreateRequest): Promise<Model> {
        let response = await this.api.create(this.path, request);
        
        let model = this.convertResponse(response);

        return model;
    }

    public async update(key: number|string, request: UpdateRequest): Promise<Model> {
        let path = this.createPath(key);
        
        let response = await this.api.update(path, request);

        let model = this.convertResponse(response);

        return model;

    }

    public async delete(key: number|string): Promise<void> {
        let path = this.createPath(key);

        await this.api.delete(path);
    }

    private createPath(key: number|string): string {
        return `${this.path}/${key}`;
    }

    protected convertResponse(response: object): Model {
        return response as unknown as Model;
    }

}

export default ModelRepository;