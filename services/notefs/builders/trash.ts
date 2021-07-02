import TrashNode, {TrashChild} from '~/services/notefs/nodes_deprecated/trash'
import NodeBuilder from '~/services/notefs/builders/node'
import {Key} from '~/services/notefs/node'


export default class TrashBuilder extends NodeBuilder<TrashNode> {

    protected $children: TrashChild[] = [];


    public children(children: TrashChild[]) {
        this.$children = children;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined
            || this.$name === undefined;
    }

    protected create(): TrashNode {
        return new TrashNode(
            this.$id as Key,
            this.$name as string,
            this.$children
        );
    }
}