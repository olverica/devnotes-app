import ParentNode from '~/services/notefs/nodes/parent'
import NoteNode from '~/services/notefs/nodes/note'
import TagNode from '~/services/notefs/nodes/tag'
import {Key} from '~/services/notefs/nodes/node'


export type FolderChild = NoteNode|TagNode;

export enum FolderPermission {
    Protected = 'protected',
    Private = 'private',
    Public = 'public'
}


export default class FolderNode extends ParentNode<FolderChild> {
    
    public permission: FolderPermission;


    constructor(id: Key, name: string, permission: FolderPermission, children: FolderChild[] = []) {
        super(id, name, children);

        this.permission = permission;
    }
}