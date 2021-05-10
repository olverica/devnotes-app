import TreeNode, {Key} from '~/services/notefs/nodes/node'

export default class NoteNode implements TreeNode {

    public id: Key;

    public name: string;

    public description: string;


    constructor(id: Key, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}