import TreeSearcher from '~/services/notefs/searcher'
import TreeNode, {ParentNode, Key} from '~/services/notefs/node'

export default class NodeTreeSearcher implements TreeSearcher {

    private root: TreeNode; 


    constructor(root: TreeNode) {
        this.root = root;
    }

    public findOrFail(id: Key) {
        let node = this.find(id)

        if (node === null)
            throw Error(`Cant find node with id ${id}`);

        return node;
    }
    
    public find(id: Key): TreeNode|null {
        let founded = 
            this.searchInNode(id, this.root);

        return founded;
    }

    private searchInNode(id: Key, node: TreeNode): TreeNode|null {
        if (node.id === id)
            return node;

        if (this.hasChildren(node))
            return this.searchInNodeChildren(id, node.children);

        return null
    }

    private searchInNodeChildren(id: Key, children: TreeNode[]): TreeNode|null {
        for (let node of children) {
            let founded = 
                this.searchInNode(id, node);

            if (founded)
                return founded;
        }

        return null;
    }

    private hasChildren(node: TreeNode): node is ParentNode {
        return Boolean(node.children);
    }
}