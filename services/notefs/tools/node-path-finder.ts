import TreeNode from '~/services/notefs/nodes/node'
import ParentSeacher from '~/services/notefs/seachers/parent'


export type Path = TreeNode[];


export default class NodePathFinder {

    private parentSeacher: ParentSeacher;

    
    constructor(root: TreeNode) {
        this.parentSeacher = new ParentSeacher(root);
    }

    public build(node: TreeNode): Path {
        let path: Path = [];
        
        let target: TreeNode|null = node;
        while(target) {
            path.push(target)
            target = this.findParent(target);
        } 

        return path;
    }

    private findParent(node: TreeNode) {
        return this.parentSeacher.find(node.id);
    }
}