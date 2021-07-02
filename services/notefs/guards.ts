import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'
import RootNode from '~/services/notefs/nodes/root'
import TagNode from '~/services/notefs/nodes/tag'


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