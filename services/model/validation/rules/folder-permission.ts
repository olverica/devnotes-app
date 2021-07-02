import {FolderPermission} from '~/services/notefs/nodes/folder'


export default function isFolderPermission(prop: unknown): prop is FolderPermission {
    return prop === 'protected'
        || prop === 'private'
        || prop === 'public';
}