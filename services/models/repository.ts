
import API from '~/services/api/API'
import RestAPI from '~/services/api/RestAPI'


export type Request = object;

export type Key = number|string;


export default abstract class ModelRepository<Model, CreateRequest extends Request, UpdateRequest extends Request> {

    private readonly api: API;

    protected readonly path: string = '';    

    constructor(api: API = new RestAPI()) {
        this.api = api;
    }

    public async find(key: Key): Promise<Model> {
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

    public async update(key: Key, request: UpdateRequest): Promise<Model> {
        let path = this.createPath(key);
        
        let response = await this.api.update(path, request);

        let model = this.convertResponse(response);

        return model;

    }

    public async delete(key: Key): Promise<void> {
        let path = this.createPath(key);

        await this.api.delete(path);
    }

    private createPath(key: Key): string {
        return `${this.path}/${key}`;
    }

    protected convertResponse(response: object): Model {
        return response as unknown as Model;
    }
}