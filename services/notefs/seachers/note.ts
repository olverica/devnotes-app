import ConcreteNodeSearcher from '~/services/notefs/seachers/concrete-node'
import NoteNode from '~/services/notefs/nodes/note'


export default class NoteSeacher extends ConcreteNodeSearcher<NoteNode> {
    
    protected validate(node: unknown): node is NoteNode {
        return node instanceof NoteNode;
    }
}