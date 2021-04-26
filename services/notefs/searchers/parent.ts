import TreeSearcher from '~/services/notefs/searcher'
import TreeNode, {ParentNode, Key} from '~/services/notefs/node'

export default class ParentTreeSearcher implements TreeSearcher{

    private root: TreeNode; 


    constructor(root: TreeNode) {
        this.root = root;
    }

    public findOrFail(id: Key): ParentNode {
        let node = this.find(id)

        if (node === null)
            throw Error(`Cant find node with id ${id}`);

        return node;
    }

    public find(id: Key): ParentNode|null {
        let founded = 
            this.searchInNode(id, this.root)
        
        return founded;
    }

    public searchInNode(id: Key, node: TreeNode, parent: ParentNode|null = null): ParentNode|null {
        if (node.id === id)
            return parent;

        if (this.hasChildren(node))
            return this.searchInNodeChildren(id, node);

        return null
    }

    private searchInNodeChildren(id: Key, parent: ParentNode): ParentNode|null {
        let children = parent.children;

        for (let node of children) {
            let founded = this.searchInNode(id, node, parent);

            if (founded)
                return founded;
        }

        return null;
    }

    private hasChildren(node: TreeNode): node is ParentNode {
        return Boolean(node.children);
    }
}