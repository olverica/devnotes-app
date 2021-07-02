import Model, {Key} from '~/services/model'


export default class ModelCache<T extends Model> {

    private models: T[];
    

    constructor(models: T[] = []) {
        this.models = models;
    }

    public save(model: T) {
        if (!!!this.has(model.id))
            this.models.push(model);
    }

    public remove(key: Key) {
        let model = this.get(key);
        let index = this.models.indexOf(model);
        
        this.models.splice(index, 1);
    }

    public update(key: Key, data: object) {
        let model = this.get(key);
        
        Object.assign(model, data);
    }

    public get(id: Key): T {
       for (let model of this.models) {
            if (model.id === id)
                return model
       }

       throw Error('Cant find model');
    }

    public has(id: Key): boolean {
        for (let model of this.models) {
            if (model.id === id)
                return true;
       }

       return false
    }

    public clear() {
        this.models = [];
    }

    public saved(): T[] {
        return this.models;
    }

    public empty(): boolean {
        return !!!this.models.length;
    }
}