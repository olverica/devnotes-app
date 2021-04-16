
import TreeNode, {Key} from '~/services/notefs/node'

export default class NodeContainer {
    
    private tree: TreeNode;

    
    constructor(root: TreeNode) {
        this.tree = root;
    }

    public root(): TreeNode {
        return this.tree;
    }

    public find(key: Key): TreeNode {
        let node = this.searchInNode(key, this.tree)

        if (node === null)
            throw Error(`Cant find node with key ${key}`);

        return node;
    }

    public searchInNode(key: Key, node: TreeNode): TreeNode|null {
        if (node.id === key)
            return node;

        if (node.children)
            return this.searchInChildren(key, node.children);

        return null;
    }

    private searchInChildren(key: Key, children: TreeNode[]): TreeNode|null {
        let founded: TreeNode|null = null;

        for (let node of children) {
            founded = this.searchInNode(key, node)

            if (founded)
                return founded;
        }

        return null;
    }
}