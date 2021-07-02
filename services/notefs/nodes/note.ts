import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


export default class NoteNode implements TreeNode {

    public description?: string;
    
    public parent?: ParentNode;

    public name: string;

    public id: Key;


    constructor(id: Key, name: string, description?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}