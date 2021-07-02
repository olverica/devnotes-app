import FolderNode, {FolderChild, FolderPermission} from '~/services/notefs/nodes/folder'
import NodeBuilder from '~/services/notefs/builders/node'
import {Key} from '~/services/notefs/node'


export default class FolderBuilder extends NodeBuilder<FolderNode> {

    protected $children: FolderChild[] = [];
    
    protected $permission?: FolderPermission;


    public children(children: FolderChild[]) {
        this.$children = children;
        return this;
    }

    public permission(permission: FolderPermission) {
        this.$permission = permission;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined 
            || this.$name === undefined
            || this.$permission === undefined
    }

    protected create(): FolderNode {
        return new FolderNode(
            this.$id as Key,
            this.$name as string,
            this.$permission as FolderPermission,
            this.$children
        );
    }
}