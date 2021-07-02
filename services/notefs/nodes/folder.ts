import {Key, ParentNode} from '~/services/notefs/node'
import NoteNode from '~/services/notefs/nodes/note'
import TagNode from '~/services/notefs/nodes/tag'



export type FolderChild = NoteNode|TagNode;

export enum FolderPermission {
    Protected = 'protected',
    Private = 'private',
    Public = 'public'
}


export default class FolderNode implements ParentNode<FolderChild> {

    public permission: FolderPermission;
    
    public children: NoteNode[];
    
    public parent?: ParentNode;
    
    public name: string;
    
    public id: Key;


    constructor(id: Key, name: string, permission: FolderPermission, children: FolderChild[]) {
        this.id = id;
        this.name = name;
        this.children = children;
        this.permission = permission;
    }
}