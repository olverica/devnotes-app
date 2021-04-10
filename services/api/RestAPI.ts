
import API from '~/services/api/API'

export default class RestAPI implements API {
    
    public async create(): Promise<object> {
        throw Error('Not implemented');
        return {};
    }

    public async update(): Promise<object> {
        throw Error('Not implemented');
        return {};
    }

    public async find(): Promise<object> {
        throw Error('Not implemented');
        return {};
    }

    public async delete(): Promise<void> {
        throw Error('Not implemented');
    }
}