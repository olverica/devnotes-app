import RootNode, {RootChild} from '~/services/notefs/nodes_deprecated/root'
import TreeNode, {Key} from '~/services/notefs/node'
import NodeBuilder from '~/services/notefs/builders/node'


export default class RootBuilder extends NodeBuilder<RootNode> {

    protected $children: RootChild[] = [];


    public children(children: TreeNode[]) {
        this.$children = children;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined
            || this.$name === undefined;
    }

    protected create(): RootNode {
        return new RootNode(
            this.$id as Key,
            this.$name as string,
            this.$children
        );
    }
}