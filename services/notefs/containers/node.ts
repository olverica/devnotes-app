import TreeNode from '~/services/notefs/node'


export interface NodeUpdateRequest {
    name?: string;
}   


export default abstract class NodeContainer {
    
    protected node: TreeNode; 

    public abstract update(request: object): void;


    constructor(node: TreeNode) {
        this.node = node;
    }

    public detach() {
        if (!!!this.hasParent())
            throw Error('Cant detach node without parent')

        this.node.parent = undefined;
    }

    private hasParent(): boolean {
        return Boolean(this.node.parent);
    }
} 