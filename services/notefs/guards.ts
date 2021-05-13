import FolderNode from '~/services/notefs/nodes/folder'
import TreeNode from '~/services/notefs/nodes/node'
import NoteNode from '~/services/notefs/nodes/note'
import TagNode from '~/services/notefs/nodes/tag'


export function isFolder(node: TreeNode): node is FolderNode {
    return node instanceof FolderNode;
}

export function isNote(node: TreeNode): node is NoteNode {
    return node instanceof NoteNode;
}

export function isTag(node: TreeNode): node is TagNode {
    return node instanceof TagNode;
}
