import ArrayedParent from '~/services/notefs/nodes/bases/arrayed-parent';
import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'


export type RootChild = NoteNode|FolderNode;

export default class RootNode extends ArrayedParent<RootChild>{
    //
}