import TreeNode from '~/services/notefs/node'


export default abstract class NodeParser<Node extends TreeNode, ValdiatedNode> {

    protected abstract createNode(model: ValdiatedNode): Node;
    
    protected abstract validate(model: unknown): model is ValdiatedNode;

        
    public eat(model: unknown): Node|null {
        if (!!!this.validate(model))
            return null;
        
        return this.createNode(model);
    }
}