import API, {ApiResponse} from '~/services/api'


export class ResposeStub implements ApiResponse {
    
    public asObject() {
        return {};
    }

    public asArray() {
        return [];
    }

    public raw() {
        return 1;
    }
}

export class ResponseMock implements ApiResponse {

    public asArrayCalled: boolean = false;

    public asObjectCalled: boolean = false;

    public rawCalled: boolean = false;


    asArray() {
        this.asArrayCalled = true;
        return [];
    }

    asObject() {
        this.asObjectCalled = true;
        return {};
    }

    raw() {
        this.rawCalled = true;
        return '';
    }
}

export class ApiStub implements API {

    async patch(path: string, data: object) {
        return new ResponseMock();
    }

    async post(path: string, data: object) {
        return new ResponseMock();
    }

    async get(path: string) {
        return new ResponseMock();
    }

    async delete(path: string) {
    }
}

export class ApiMock implements API {
    
    public deleteCalled: boolean = false;
    
    public patchCalled: boolean = false;
    
    public postCalled: boolean = false;
    
    public getCalled: boolean = false;


    async patch(path: string, data: object) {
        this.patchCalled = true;
        return new ResponseMock();
    }

    async post(path: string, data: object) {
        this.postCalled = true;
        return new ResponseMock();
    }

    async get(path: string) {
        this.getCalled = true;
        return new ResponseMock();
    }

    async delete(path: string) {
        this.deleteCalled = true;
    }
}