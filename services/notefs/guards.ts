import FolderNode from '~/services/notefs/nodes/folder'
import NoteNode from '~/services/notefs/nodes/note'
import RootNode from '~/services/notefs/nodes/root'
import TagNode from '~/services/notefs/nodes/tag'
import TreeNode from '~/services/notefs/node'

export function isFolder(node: TreeNode): node is FolderNode {
    return node instanceof FolderNode;
}

export function isNote(node: TreeNode): node is NoteNode {
    return node instanceof NoteNode;
}

export function isRoot(node: TreeNode): node is RootNode {
    return node instanceof RootNode;
}

export function isTag(node: TreeNode): node is TagNode {
    return node instanceof TagNode;
}