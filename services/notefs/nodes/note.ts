import TreeNode, {NodeVisitor} from '~/services/notefs/node'
import {Key} from '~/services/model'


export default class NoteNode implements TreeNode {

    public description?: string;

    public name: string;

    public id: Key;


    constructor(id: Key, name: string, description?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public accept(visitor: NodeVisitor) {
        visitor.node(this);
    }
}