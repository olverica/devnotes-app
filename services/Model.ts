interface ModelFields {
    [key: string]: unknown;
};

export interface Model {
    exists(): boolean;
    getKey(): unknown;
    getFields(): ModelFields;
}

export class ProxyModel implements Model {

    private saved: ModelFields = {};

    private fresh: ModelFields = {};

    protected key: unknown|null = null;

    public readonly keyName: string = 'id';

    public readonly path: string = ''


    constructor(fields: ModelFields) {
        this.fill(fields);
    }

    private fill(fields: ModelFields) {
        for (let [name, value] of Object.entries(fields)) {

            if (name === this.keyName) {
                this.key = value;
                continue;
            }
            
            this.saved[name] = value;
        }
    }
    
    public dirty(): boolean {
        for (let key in this.fresh) {
            if (this.fresh[key] !== this.saved[key]) 
                return true
        }

        return false;
    }

    public get(name: string): unknown {
        if (this.fresh.hasOwnProperty(name))
            return this.fresh[name];

        if (this.saved.hasOwnProperty(name))
            return this.saved[name];

        throw Error(`Cant find propperty with name '${name}'`);
    }

    public set(name: string, value: unknown) {
        this.fresh[name] = value;
    }

    public exists(): boolean {
        return this.key !== null;
    }
       
    // TO DO mb copy
    public getFields(): ModelFields {
        return this.fresh;
    }

    public getKey(): unknown {
        if (this.key === null)
            throw Error(`Key isn't setted`);

        return this.key;
    }
}
