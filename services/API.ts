
export default interface API {
    find(path: string): Promise<object>,
    
    create(path: string, data: object) : Promise<object>,
    
    delete(path: string) : Promise<void>,

    update(path: string, data: object) : Promise<object>,

}

// TO DO custom errors? 