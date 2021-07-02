import TagNode, {TagChild} from '~/services/notefs/nodes/tag'
import NodeBuilder from '~/services/notefs/builders/node'
import {Key} from '~/services/notefs/node'


export default class TagBuilder extends NodeBuilder<TagNode> {

    protected $children: TagChild[] = [];
    
    protected $color?:  string;


    public children(children: TagChild[]) {
        this.$children = children;
        return this;
    }

    public color(color: string) {
        this.$color = color;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined 
            || this.$name === undefined
            || this.$color === undefined
    }

    protected create(): TagNode {
        return new TagNode(
            this.$id as Key,
            this.$name as string,
            this.$color as string,
            this.$children
        );
    }
}