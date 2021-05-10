import ConcreteNodeSearcher from '~/services/notefs/seachers/concrete-node'
import FolderNode from '~/services/notefs/nodes/folder'


export default class FolderSeacher extends ConcreteNodeSearcher<FolderNode> {
    
    protected validate(node: unknown): node is FolderNode {
        return node instanceof FolderNode;
    }
}