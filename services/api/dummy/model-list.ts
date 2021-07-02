
export interface Model {
    id: string
}


export default class ModelList {

    private list: Map<string, Model> = new Map();


    public toArray() {
        return this.list;
    }

    public update(id: string, data: object) {
        let model = this.get(id);
        Object.assign(model, data);

        return model;
    }

    public append(data: object) {
        let model = {
            id: this.createId()
        };

        Object.assign(model, data);
        this.list.set(model.id, model);
    }

    public remove(id: string) {
        if (this.list.has(id))
            this.list.delete(id);

        throw Error(`Cant find model with id ${id}`);
    }

    public get(id: string) {
        if (this.list.has(id))
            return this.list.get(id);

        throw Error(`Cant find model with id ${id}`);
    }

    private createId() {
        let length = this.list.values.length;

        return `${length + 1}`;
    }
}