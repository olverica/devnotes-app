import ConcreteNodeSearcher from '~/services/notefs/seachers/concrete-node'
import TagNode from '~/services/notefs/nodes/tag'


export default class TagSeacher extends ConcreteNodeSearcher<TagNode> {
    
    protected validate(node: unknown): node is TagNode {
        return node instanceof TagNode;
    }
}