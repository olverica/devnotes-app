import TreeNode, {Key} from '~/services/notefs/nodes/node'
import ParentNodeTemplate from '~/services/notefs/nodes/parent'


type ParentNode = ParentNodeTemplate<TreeNode>;


export default class NodeSeacher {

    private root: TreeNode;

    
    constructor(root: TreeNode) {
        this.root = root;
    }

    public find(id: Key): TreeNode|null {
        return this.searchInNode(id, this.root);
    }
    
    public findOrFail(id: Key): TreeNode {
        let node = this.find(id);

        if (!!!node)
            throw Error('Can`t find node');

        return node;
    }
    
    private searchInNode(id: Key, node: TreeNode):  TreeNode|null {
        if (node.id === id)
            return node;

        if (this.hasChildren(node))
            return this.searchInChildren(id, node)

        return null;
    }

    private searchInChildren(id: Key, parent: ParentNode): TreeNode|null {
        for (let node of parent.children) {
            let founded = this.searchInNode(id, node);

            if (founded !== null)
                return founded;
        }

        return null;
    }

    private hasChildren(node: TreeNode): node is ParentNode {
        return node instanceof ParentNodeTemplate;
    }
}