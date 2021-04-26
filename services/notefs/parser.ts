import TreeContainer from '~/services/notefs/container'
import TreeNode from '~/services/notefs/node'
import NodeGuard from '~/services/notefs/guard'


export default class TreeParser {

    private guard = new NodeGuard();

    
    public generate(node: object): TreeContainer {
        
        let root = this.traverse(node);
        let container = new TreeContainer(root);

        return container;
    }

    private traverse(target: object): TreeNode {
        if (!!!this.isNode(target))
            throw Error('Inccorect object type');

        if (target.children) {
            for (let node of target.children)
                this.traverse(node);
        }

        return target;
    }

    private isNode(target: object): target is TreeNode {
        return this.guard.check(target);
    }
}