import {Key, ParentNode} from '~/services/notefs/node'
import NoteNode from '~/services/notefs/nodes/note'


export type TagChild = NoteNode;


export default class TagNode implements ParentNode<TagChild> {

    public children: NoteNode[];
    
    public parent?: ParentNode;
    
    public color: string;
    
    public name: string;
    
    public id: Key;


    constructor(id: Key, name: string, color: string, children: TagChild[]) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.children = children;
    }
}