import ParentNode from '~/services/notefs/nodes/parent'
import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'


export type RootChild = NoteNode|FolderNode;

export default class Root extends ParentNode<RootChild> {
    // 
}