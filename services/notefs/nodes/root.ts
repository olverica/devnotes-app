import {Key, ParentNode} from '~/services/notefs/node'
import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'


export type RootChild = NoteNode|FolderNode;


export default class RootNode implements ParentNode {

    public children: RootChild[];
    
    public name: string;
    
    public id: Key;


    constructor(id: Key, name: string, children: RootChild[]) {
        this.id = id;
        this.name = name;
        this.children = children;
    }
}