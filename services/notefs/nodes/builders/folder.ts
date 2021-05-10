import FolderNode, {FolderChild} from '~/services/notefs/nodes/folder'
import NodeBuilder from '~/services/notefs/nodes/builders/node'
import {Key} from '~/services/notefs/nodes/node'


export default class FolderBuilder extends NodeBuilder<FolderNode> {

    protected $children?: FolderChild[];


    public children(children: FolderChild[]) {
        this.$children = children;
        return this;
    }

    protected cantBuild(): boolean {
        return this.id === undefined 
            || this.name === undefined
    }

    protected create(): FolderNode {
        return new FolderNode(
            this.$id as Key,
            this.$name as string,
            this.$children
        );
    }
}