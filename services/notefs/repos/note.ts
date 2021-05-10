import {NoteUpdateModel} from '~/services/notefs/repos/actions/update/note'
import NoteUpdateAction from '~/services/notefs/repos/actions/update/note'
import NoteGetAction  from '~/services/notefs/repos/actions/get/note'
import NodeDeleteAction from '~/services/notefs/repos/actions/delete'
import NodeRepository from '~/services/notefs/repos/node'
import ParentNode from '~/services/notefs/nodes/parent'
import NoteNode from '~/services/notefs/nodes/note'


export default class NoteRepository implements NodeRepository {
    
    private parent: ParentNode<NoteNode>;
    
    private note: NoteNode;


    constructor(note: NoteNode, parent: ParentNode<NoteNode>) {
        this.parent = parent;
        this.note = note;
    }

    public get(): NoteNode {
        let action = 
            new NoteGetAction(this.note);

        return action.proceed();
    }

    public update(model: NoteUpdateModel) {
        let action = 
            new NoteUpdateAction(this.note, model);

        action.proceed();
    }

    public delete() {
        let action = 
            new NodeDeleteAction(this.parent, this.note);

        action.proceed();
    }
} 