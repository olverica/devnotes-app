import NodeBuilder from '~/services/notefs/builders/node'
import ProjectNode from '~/services/notefs/nodes/project'
import RootNode from '~/services/notefs/nodes/root'
import {Key} from '~/services/notefs/node'


export default class RootBuilder extends NodeBuilder<ProjectNode> {

    protected $root?: RootNode;


    public root(root?: RootNode) {
        this.$root = root;
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
        );
    }
}