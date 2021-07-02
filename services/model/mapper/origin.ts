
export default class MapperOrigin {

    private readonly base: string;


    constructor(base: string) {
        this.base = base;
    }
    
    public makePath(key?: string|number): string {
        let path = this.base;

        if (!!!key)
            return path;

        return path + '/' + key;
    }
}