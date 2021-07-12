import ArrayedParent from '~/services/notefs/nodes/bases/arrayed-parent';
import TrashBinNode from '~/services/notefs/nodes/trash-bin'
import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'


export type RootChild = NoteNode|FolderNode|TrashBinNode;

export default class RootNode extends ArrayedParent<RootChild>{
    //
}