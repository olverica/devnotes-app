
import ModelRepository, {Key} from '~/services/model/ModelRepository'
import TreeQueryBuilder from '~/services/notefs/query/builder'


interface UpdateType {
    parent?: Key
};

interface CreateType {
    parent: Key;
}

interface ModelType {
    id: Key,
    parent: Key,
    [index: string]: unknown
}


export default class TreeComponent<Model extends ModelType, Create extends CreateType, Update extends UpdateType> {   

    private repo : ModelRepository<Model, Create, Update>;

    private tree: TreeQueryBuilder;

    
    constructor(tree: TreeQueryBuilder, repo: ModelRepository<Model, Create, Update>) {
        this.repo = repo;
        this.tree = tree;
    }

    async delete(id: Key): Promise<void> {
        await this.repo.delete(id);
        
        this.tree
            .select(id)
            .delete();
    }

    async create(request: Create): Promise<Model> {
        let model = 
            await this.repo.create(request);
        
        this.tree
            .select(model.parent)
            .append(model);

        return model;
    }

    async move(target: Key, parent: Key): Promise<void> {
        let model = {parent} as Update;

        await this.repo.update(target, model);

        this.tree
            .select(target)
            .moveTo(parent);
    }

    async update(id: Key ,request: Update): Promise<Model> {
        if (request.hasOwnProperty('parent'))
            throw Error('Cant change parent over update method. Use move instead ');

        let model = 
            await this.repo.update(id, request);

        this.tree
            .select(id)
            .update(model);

        return model;
    }
}