import TreeNode, {Key} from '~/services/notefs/nodes/node'
import NoteRepository from '~/services/notefs/repos/note'
import ParentSeacher from '~/services/notefs/seachers/parent'
import NodeSelector from '~/services/notefs/selectors/node'
import NoteSeacher from '~/services/notefs/seachers/note'
import ParentNode from '~/services/notefs/nodes/parent'
import NoteNode from '~/services/notefs/nodes/note'


export default class NoteSelector implements NodeSelector {
    
    private root: TreeNode;


    constructor(root: TreeNode) {
        this.root = root;
    }

    public select(id: Key): NoteRepository {
        let {note, parent} = this.find(id);

        return new NoteRepository(note, parent);
    }

    private find(id: Key) {
        let note = this.findNote(id);
        let parent = this.findParent(id);

        return {note, parent};
    }

    private findNote(id: Key): NoteNode {
        let seacher = new NoteSeacher(this.root);
        let node = seacher.findOrFail(id);

        return node;
    }

    private findParent(id: Key): ParentNode<NoteNode> {
        let seacher = new ParentSeacher(this.root);
        let parent = seacher.findOrFail(id);

        return parent as ParentNode<NoteNode>;
    }
}