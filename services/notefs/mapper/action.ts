import TreeSeacher  from '~/services/notefs/tree-seacher'
import RootNode from '~/services/notefs/nodes/root'
import Project from '~/models/project'
import {Key} from '~/services/model'


export default class TreeMapperAction<Action> {

    protected root: RootNode;

    protected action: Action;

    
    constructor(project: Project, action: Action) {
        this.root = project.root;
        this.action = action;
    }

    protected foundParent(id: Key) {
        let seacher = new TreeSeacher(this.root);
        let parent = seacher.findParent(id);

        return parent;
    }

    protected foundNode(id: Key) {
        let seacher = new TreeSeacher(this.root);
        let node = seacher.findNode(id);

        return node;
    }
}