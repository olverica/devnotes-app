import ApiQueryRunner from '~/services/api/query/runner'
import API from '~/services/api'


export default class ApiQueryBuilder {
    
    private api: API;

    
    constructor(api: API) {
        this.api = api;
    }

    public get(path: string) {
        let request = () => 
            this.api.get(path);

        return new ApiQueryRunner(request);
    }

    public post(path: string, data: object) {
        let request = () => 
            this.api.post(path, data);

        return new ApiQueryRunner(request);
    }

    public patch(path: string, data: object) {
        let request = () => 
            this.api.patch(path, data);

        return new ApiQueryRunner(request);
    }

    public delete(path: string) {
        let request = () => 
            this.api.delete(path);

        return request();
    }
}