import TreeNode, {Key} from '~/services/notefs/nodes/node'
import ParentNodeTemplate from '~/services/notefs/nodes/parent'


type ParentNode = ParentNodeTemplate<TreeNode>;


export default class ParentSeacher {

    private root: TreeNode;

    
    constructor(root: TreeNode) {
        this.root = root;
    }

    public find(id: Key): ParentNode|null {
        return this.searchInNode(id, this.root);
    }
    
    public findOrFail(id: Key): ParentNode {
        let node = this.find(id);

        if (!!!node)
            throw Error('Can`t find node');

        return node;
    }
    
    public searchInNode(id: Key, node: TreeNode, parent: ParentNode|null = null): ParentNode|null {
        if (node.id === id)
            return parent;

        if (this.hasChildren(node))
            return this.searchInChildren(id, node);

        return null
    }

    private searchInChildren(id: Key, parent: ParentNode): ParentNode|null {
        let children = parent.children;

        for (let node of children) {
            let founded = this.searchInNode(id, node, parent);

            if (founded)
                return founded;
        }

        return null;
    }
    private hasChildren(node: TreeNode): node is ParentNode {
        return node instanceof ParentNodeTemplate;
    }
}