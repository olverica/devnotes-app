import FolderNode from '~/services/notefs/nodes/folder'
import TrashBin from '~/services/notefs/nodes/trash-bin'
import NoteNode from '~/services/notefs/nodes/note'
import RootNode from '~/services/notefs/nodes/root'
import TagNode from '~/services/notefs/nodes/tag'


export function isTrashBin(node: unknown): node is TrashBin {
    return node instanceof TrashBin;
}

export function isArchive(node: unknown): node is never {
    return false;
}

export function isFolder(node: unknown): node is FolderNode {
    return node instanceof FolderNode;
}

export function isNote(node: unknown): node is NoteNode {
    return node instanceof NoteNode;
}

export function isRoot(node: unknown): node is RootNode {
    return node instanceof RootNode;
}

export function isTag(node: unknown): node is TagNode {
    return node instanceof TagNode;
}