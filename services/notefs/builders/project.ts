import NodeBuilder from '~/services/notefs/builders/node'
import ProjectNode from '~/services/notefs/nodes_deprecated/project'
import TrashNode from '~/services/notefs/nodes_deprecated/trash'
import RootNode from '~/services/notefs/nodes_deprecated/root'
import {Key} from '~/services/notefs/node'


export default class RootBuilder extends NodeBuilder<ProjectNode> {

    protected $root?: RootNode;

    protected $trash?: TrashNode;


    public root(root?: RootNode) {
        this.$root = root;
        return this;
    }

    public trash(trash?: TrashNode) {
        this.$trash = trash;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined 
            || this.$name === undefined
            || this.$root === undefined;
    }

    protected create(): ProjectNode {
        return new ProjectNode(
            this.$id as Key,
            this.$name as string,
            this.$root as RootNode,
            this.$trash as TrashNode
        );
    }
}