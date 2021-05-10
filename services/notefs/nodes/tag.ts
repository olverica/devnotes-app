import ParentNode from '~/services/notefs/nodes/parent'
import NoteNode from '~/services/notefs/nodes/note'
import {Key} from '~/services/notefs/nodes/node'


export type TagChild = NoteNode;


export default class TagNode extends ParentNode<TagChild> {
    
    public color: string;

    constructor(id: Key, name: string, color: string, children: TagChild[] = []) {
        super(id, name, children);

        this.color = color;
    }
}