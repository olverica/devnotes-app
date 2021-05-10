import RootRepository from '~/services/notefs/repos/root'
import FolderSelector from '~/services/notefs/selectors/folder'
import NoteSelector from '~/services/notefs/selectors/note'
import TagSelector from '~/services/notefs/selectors/tag'
import RootNode from '~/services/notefs/nodes/root'
import {Key} from '~/services/notefs/nodes/node'



export default class Project {

    private tree: RootNode;


    constructor(tree: RootNode) {
        this.tree = tree;
    }

    public selectTag(id: Key) {
        let selector = 
            new TagSelector(this.tree);

        return selector.select(id);
    }

    public selectFolder(id: Key) {
        let selector = 
            new FolderSelector(this.tree);

        return selector.select(id);
    }

    public selectNote(id: Key) {
        let selector = 
            new NoteSelector(this.tree);

        return selector.select(id);
    }

    public selectRoot() {
        let repository = 
            new RootRepository(this.tree);

        return repository;
    }
}