import TreeNode, {ParentNode} from '~/services/notefs/node'
import NodeParser from '~/services/notefs/parsers/node'


export interface ValidatedParent {
    children: unknown[]
}


export default abstract class ParentParser<Node extends ParentNode, ValidatedNode extends ValidatedParent, NodeChild extends TreeNode> extends NodeParser<Node, ValidatedNode>  {

    protected childParsers: any[] = [];


    protected abstract createParent(model: ValidatedNode): Node;
    
    protected abstract validate(model: unknown): model is ValidatedNode;


    protected createNode(model: ValidatedNode): Node {
        let node = this.createParent(model);
        let children = this.parseChildren(model);
        
        this.attachChildren(node, children);

        return node;
    }

    private parseChildren(model: ValidatedParent) {
        let children: NodeChild[] = [];
        
        for (let childModel of model.children) {
            let child = 
                this.parseChild(childModel);

            children.push(child);
        }

        return children;
    }

    private parseChild(model: unknown): NodeChild {
        for (let parser of this.childParsers) {
            let parsed = parser.eat(model);

            if (parsed)
                return parsed;
        }

        throw Error('Cant parse child');
    }

    private attachChildren(parent: Node, children: NodeChild[]) {
        parent.children = children;

        for (let child of children)
            child.parent = parent;
    }
}