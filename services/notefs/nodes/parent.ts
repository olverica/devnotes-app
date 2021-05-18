import TreeNode, {Key} from '~/services/notefs/nodes/node'


export default abstract class ParentNode<ChildNode extends TreeNode = TreeNode> implements TreeNode {

    public id: Key;

    public name: string;

    public children: ChildNode[];


    constructor(id: Key, name: string, children: ChildNode[] = []) {
        this.id = id;
        this.name = name;
        this.children = children;
    }

    public append(node: ChildNode) {
        this.children.push(node)
    }

    public remove(node: ChildNode) {
        let index = 
            this.getNodeIndex(node);

        this.removeChildByIndex(index);
    }

    private getNodeIndex(node: ChildNode): number {
        let index = this.children.indexOf(node);
        if (index === -1)
            throw Error('Can`t find node');

        return index;
    }

    private removeChildByIndex(index: number) {
        this.children.splice(index, 1);
    }
}