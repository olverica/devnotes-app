import ActiveRecord from '~/services/ActiveRecord'

export default abstract class ModelFacade<T> {

    constructor(path: string, properties: any) {
        
    }

    public async find(): Promise<ActiveRecord> {
        return new ActiveRecord(properties, this);
    }   

    public async create(): Promise<ActiveRecord> {
        return new ActiveRecord(this);
    }

    public async delete() {
        return;
    }
} 