import TrashNode from '~/services/notefs/nodes/trash'
import RootNode from '~/services/notefs/nodes/root'


export default class ProjectNode {

    public archive: unknown;  /// <---- I WAITING TO BE DONE
    
    public trash?: TrashNode; /// <---- I WAITING TO BE DONE
    
    public root: RootNode;

    public name: string;
    
    public id: number|string;

    
    constructor(id: number|string, name: string, root: RootNode, trash?: TrashNode) {
        this.id = id;
        this.name = name;
        this.root = root;
        this.trash = trash;
    }
}