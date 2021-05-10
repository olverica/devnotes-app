import TreeNode, {Key} from '~/services/notefs/nodes/node'
import NodeSearcher from '~/services/notefs/seachers/node'
import TreeSearcher from '~/services/notefs/seacher'



abstract class ConcreteNodeSearcher<T extends TreeNode> implements TreeSearcher {
    
    private nodeSeacher: NodeSearcher;

    protected abstract validate(node: unknown): node is T;

  
    constructor(root: TreeNode) {
        this.nodeSeacher = new NodeSearcher(root);
    }

    public find(id: Key): T|null {
        let founded = this.nodeSeacher.find(id);
        
        if (!!!this.validate(founded))
            throw Error('Founded node has incorrect type')
        
        return founded;
    }

    public findOrFail(id: Key): T  {
        let founded = this.nodeSeacher.findOrFail(id);
        
        if (!!!this.validate(founded))
            throw Error('Founded node has incorrect type')

        return founded;
    }
}   

export default ConcreteNodeSearcher;
