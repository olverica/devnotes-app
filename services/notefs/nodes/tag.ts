import ArrayedParent from '~/services/notefs/nodes/bases/arrayed-parent'
import NoteNode from '~/services/notefs/nodes/note'
import {Key} from '~/services/model'


export type TagChild = NoteNode;

export default class TagNode extends ArrayedParent<TagChild> {

    public color: string;

    public name: string;


    constructor(id: Key, name: string, color: string, children: TagChild[]) {
        super(id, children);
        this.color = color;
        this.name = name;
    }
}