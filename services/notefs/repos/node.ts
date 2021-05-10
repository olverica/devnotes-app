import TreeNode from '~/services/notefs/nodes/node'


export default interface NodeRepository{
    get(): TreeNode; 
    delete(): void; 

    update(model: unknown): void; 
    append?(node: TreeNode): void;
}