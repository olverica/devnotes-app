import {ApiResponse, ObjectResponse} from '~/services/api'


export interface ResponseWrapper {
    data: unknown
}


export default class LaravelResponse implements ApiResponse {

    private wrapper: ResponseWrapper;


    constructor(wrapper: unknown) {
        this.wrapper = this.parseWrapper(wrapper);
    }

    public raw(): unknown {
        return this.wrapper.data;
    }

    public asArray(): unknown[] {
        let data = this.wrapper.data;

        if (this.isArray(data))
            return data;

        throw Error('Data has incorrect format');
    }

    public asObject(): ObjectResponse {
        let data = this.wrapper.data;

        if (this.isObject(data))
            return data;

        throw Error('Data has incorrect format');
    }

    private parseWrapper(wrapper: unknown): ResponseWrapper {
        if (this.isResponseWrapper(wrapper))
            return wrapper;
            
        throw Error('Response has incorrect format');
    }   

    private isResponseWrapper(target: unknown): target is ResponseWrapper {
        return this.isObject(target) 
            && target.hasOwnProperty('data');
    }

    private isObject(target: unknown): target is ObjectResponse {
        return typeof target === 'object';
    }

    private isArray(target:unknown): target is [] {
        return Array.isArray(target);
    }
}