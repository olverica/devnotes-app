import TreeNode, {ParentNode} from '~/services/notefs/node'
import ParentSeacher from '~/services/notefs/seachers/parent'
import NodeSeacher from '~/services/notefs/seachers/node'
import {Key} from '~/services/model'


export default class TreeSeacher {
    
    private tree: ParentNode<TreeNode>;


    constructor(tree: ParentNode<TreeNode>) {
        this.tree = tree;
    }

    public  findNode(id: Key): TreeNode {
        let seacher = new NodeSeacher(id);
        seacher.parent(this.tree);

        let node = seacher.founded(); 
        if (node)
            return node;

        throw Error('Cant find node');
    }

    public findParent(id: Key) {
        let seacher = new ParentSeacher(id);
        seacher.parent(this.tree);

        let parent = seacher.founded(); 
        if (parent)
            return parent;

        throw Error('Cant find parent');
    }
}