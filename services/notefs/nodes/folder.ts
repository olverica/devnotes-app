import ParentNode from '~/services/notefs/nodes/parent'
import NoteNode from '~/services/notefs/nodes/note'
import TagNode from '~/services/notefs/nodes/tag'


export type FolderChild = NoteNode|TagNode;

export default class FolderNode extends ParentNode<FolderChild> {
    //
}