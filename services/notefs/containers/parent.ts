import NodeContainer from '~/services/notefs/containers/node'
import TreeNode, {ParentNode} from '~/services/notefs/node'


export interface UpdateRequest {
    name?: string
}


export default class ParentContainer<T extends TreeNode> extends NodeContainer {
    
    protected node!: ParentNode; 


    constructor(node: ParentNode) {
        super(node)
    }

    public update(request: UpdateRequest) {
        let {name} =  request;

        if (name)
            this.node.name = name;
    }

    public addChild(child: T) {
        this.pushChild(child);
        this.attachChildParent(child);
    }

    public removeChild(node: T) {
        let index = 
            this.getNodeIndex(node);
        
        this.removeChildByIndex(index);
        this.clearChildParent(node);
    }

    private getNodeIndex(node: T): number {
        let index = this.node.children.indexOf(node);
        if (index === -1)
            throw Error('Can`t find node');

        return index;
    }

    private pushChild(child: T) {
        this.node.children.push(child);
    }

    private removeChildByIndex(index: number) {
        this.node.children.splice(index, 1);
    }

    private attachChildParent(child: T) {
        child.parent = this.node;
    }

    private clearChildParent(child: T) {
        child.parent = undefined;
    }
} 