import {ActionsSchema} from '~/services/model/mapper/action'
import Model, {Key} from '~/services/model'


export default class TMapper<T extends Model> {
    
    protected actions: ActionsSchema<T>;
    

    constructor(actions: ActionsSchema<T>) {
        this.actions = actions;
    }
 
    public all(): Promise<T[]> {
        return this.actions
            .all()
            .proceed();
    }

    public get(id: Key): Promise<T> {
        return this.actions
            .get()
            .proceed(id);
    }

    public async update(model: T, updateRequest: object) {
        return this.actions
            .update()
            .proceed(model.id, updateRequest)
    }

    public async create(createRequest: object): Promise<T> {
        return this.actions
            .create()
            .proceed(createRequest)
    }  
    
    public async delete(model: T) {
        this.actions
            .delete()
            .proceed(model.id);
    } 
}