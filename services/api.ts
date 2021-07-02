
export interface ObjectResponse {
    [key: string]: unknown
}

export interface ApiResponse {
    asObject(): ObjectResponse;
    asArray(): unknown[];
    raw(): unknown;
}

export default interface API {
    
    get(path: string): Promise<ApiResponse>,
    
    post(path: string, data: object) : Promise<ApiResponse>,
    
    patch(path: string, data: object) : Promise<ApiResponse>,
    
    delete(path: string) : Promise<void>,
}

// TO DO custom errors? 