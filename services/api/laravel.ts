import LaravelResponse from '~/services/api/responses/laravel'
import API from '~/services/api'


export default class LaravelAPI implements API {
    
    public async post(): Promise<LaravelResponse> {
        throw Error('Not implemented');
        return this.createDummyResponse();
    }

    public async patch(): Promise<LaravelResponse> {
        throw Error('Not implemented');
        return this.createDummyResponse();
    }

    public async get(): Promise<LaravelResponse> {
        throw Error('Not implemented');
        return this.createDummyResponse();
    }

    public async delete(): Promise<void> {
        throw Error('Not implemented');
    }

    private createDummyResponse() {
        return this.createResponse({ data: {} })
    }

    private createResponse(data: unknown) {
        return new LaravelResponse(data);
    }
}