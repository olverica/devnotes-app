import {ApiResponse} from '~/services/api'


export interface Callback {
    (): Promise<ApiResponse>    
}


export default class ApiQueryRunner {
    
    private request: Callback;


    constructor(request: Callback) {
        this.request = request;
    }

    public async asArray() {
        let response = await this.fire();

        return response.asArray();
    }

    public async asObject() {
        let response = await this.fire();
        
        return response.asObject();
    }

    public async raw() {
        let response = await this.fire();
        
        return response.raw();
    }

    private async fire(): Promise<ApiResponse> {
        return this.request();
    }
}