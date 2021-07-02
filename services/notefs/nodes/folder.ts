import ArrayedParent from '~/services/notefs/nodes/bases/arrayed-parent'
import NoteNode from '~/services/notefs/nodes/note'
import TagNode from '~/services/notefs/nodes/tag'
import {Key} from '~/services/model'


export type FolderChild = NoteNode|TagNode;

export enum FolderPermission {
    Protected = 'protected',
    Private = 'private',
    Public = 'public'
}

export default class FolderNode extends ArrayedParent<FolderChild> {

    public permission: FolderPermission;

    public name: string;


    constructor(id: Key, name: string, permission: FolderPermission, children: FolderChild[]) {
        super(id, children);
        this.permission = permission;
        this.name = name;
    }
}