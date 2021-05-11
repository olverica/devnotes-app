import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import NodeBuilder from '~/services/notefs/nodes/builders/node'
import {Key} from '~/services/notefs/nodes/node'


export default class RootBuilder extends NodeBuilder<RootNode> {

    protected $children?: RootChild[];


    public children(children: RootChild[]) {
        this.$children = children;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined 
            || this.$name === undefined
    }

    protected create(): RootNode {
        return new RootNode(
            this.$id as Key,
            this.$name as string,
            this.$children
        );
    }
}