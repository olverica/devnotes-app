import TreeNode, {ParentNode, NodeVisitor} from '~/services/notefs/node'
import {Key} from '~/services/model'


export default class ArrayedParent<T extends TreeNode> implements ParentNode<T> {
    
    public children: T[];
    
    public id: Key;


    constructor(id: Key, children: T[] = []) {
        this.children = children;
        this.id = id;
    }
 
    public detach(node: T) {
        let index = this.children.indexOf(node);
        if (index === -1)
            throw Error('Cant find node');

        this.children.splice(index, -1);
    }

    public attach(node: T) {
        this.children.push(node);
    }

    public accept(visitor: NodeVisitor) {
        visitor.parent(this);
    }
}