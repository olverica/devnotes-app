import TreeNode, {Key} from '~/services/notefs/nodes/node'
import TagRepository from '~/services/notefs/repos/tag'
import ParentSeacher from '~/services/notefs/seachers/parent'
import NodeSelector from '~/services/notefs/selectors/node'
import TagSeacher from '~/services/notefs/seachers/tag'
import ParentNode from '~/services/notefs/nodes/parent'
import TagNode from '~/services/notefs/nodes/tag'


export default class TagSelector implements NodeSelector {
    
    private root: TreeNode;


    constructor(root: TreeNode) {
        this.root = root;
    }

    public select(id: Key): TagRepository {
        let {tag, parent} = this.find(id);

        return new TagRepository(tag, parent);
    }

    private find(id: Key) {
        let tag = this.findTag(id);
        let parent = this.findParent(id);

        return {tag, parent};
    }

    private findTag(id: Key): TagNode {
        let seacher = new TagSeacher(this.root);
        let node = seacher.findOrFail(id);

        return node;
    }

    private findParent(id: Key): ParentNode<TagNode> {
        let seacher = new ParentSeacher(this.root);
        let parent = seacher.findOrFail(id);

        return parent as ParentNode<TagNode>;
    }
}