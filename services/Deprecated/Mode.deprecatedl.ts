
const EXISTS = true;

export default abstract class Model {

    private _id = -1;

    private exists = false;

    protected path!: string;

    protected saved = [];

    protected fresh = [];

    
    public get id():  number {
        return this._id;
    }

    public constructor(exists = false) {
        this.exists = exists;
    }

    private static childConstructor() {
        if (this.constructor.name === 'Model')
            throw Error('Method cant be called directly from Model')

        return ;
    }

    public static async create(){
        let childConstructor = Model.childConstructor();

        return new childConstructor(EXISTS);
    }

    public static async find(id: number): Promise<Model> {
        let childConstructor = Model.childConstructor();

        return new childConstructor(EXISTS);
    }

    public static async delete(id: number): Promise<void> {
        
    }

    public static async update(id: number): Promise<void> {
        
    }

    public async update(): Promise<void>{
        if (!!!this.exists)
            throw Error('Cannot update not saved model');

        await Model.update(this.id);
    }

    public async delete(): Promise<void> {
        if (!!!this.exists)
            throw Error('Cannot delete not saved model');

        await Model.delete(this.id);
        this.exists = false;
    }

    public async save(): Promise<void> {
        if (this.exists) {
            await Model.update(this.id);
            return;
        }

        await Model.create();
        this.exists = true;
    }
        
    public dirty(): boolean {
        return true;
    }

    public get(target, key) {

    }
}