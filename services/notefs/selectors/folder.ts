import FolderRepository from '~/services/notefs/repos/folder'
import TreeNode, {Key} from '~/services/notefs/nodes/node'
import FolderSeacher from '~/services/notefs/seachers/folder'
import ParentSeacher from '~/services/notefs/seachers/parent'
import NodeSelector from '~/services/notefs/selectors/node'
import ParentNode from '~/services/notefs/nodes/parent'
import FolderNode from '~/services/notefs/nodes/folder'


export default class FolderSelector implements NodeSelector {
    
    private root: TreeNode;


    constructor(root: TreeNode) {
        this.root = root;
    }

    public select(id: Key): FolderRepository {
        let {folder, parent} = this.find(id);

        return new FolderRepository(folder, parent);
    }

    private find(id: Key) {
        let folder = this.findFolder(id);
        let parent = this.findParent(id);

        return {folder, parent};
    }

    private findFolder(id: Key): FolderNode {
        let seacher = new FolderSeacher(this.root);
        let node = seacher.findOrFail(id);

        return node;
    }

    private findParent(id: Key): ParentNode<FolderNode> {
        let seacher = new ParentSeacher(this.root);
        let parent = seacher.findOrFail(id);

        return parent as ParentNode<FolderNode>;
    }
}