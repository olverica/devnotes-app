import {FolderUpdateModel} from '~/services/notefs/repos/actions/update/folder'
import FolderUpdateAction from '~/services/notefs/repos/actions/update/folder'
import FolderAppendAction from '~/services/notefs/repos/actions/append/folder'
import FolderGetAction  from '~/services/notefs/repos/actions/get/folder'
import NodeDeleteAction from '~/services/notefs/repos/actions/delete'
import {FolderChild} from '~/services/notefs/nodes/folder'
import NodeRepository from '~/services/notefs/repos/node'
import ParentNode from '~/services/notefs/nodes/parent'
import FolderNode from '~/services/notefs/nodes/folder'


export default class FolderRepository implements NodeRepository {
    
    private parent: ParentNode<FolderNode>;
    
    private folder: FolderNode;


    constructor(folder: FolderNode, parent: ParentNode<FolderNode>) {
        this.parent = parent;
        this.folder = folder;
    }

    public get(): FolderNode {
        let action = 
            new FolderGetAction(this.folder);

        return action.proceed();
    }

    public update(model: FolderUpdateModel) {
        let action = 
            new FolderUpdateAction(this.folder, model);

        action.proceed();
    }

    public append(node: FolderChild) {
        let action = 
            new FolderAppendAction(this.folder, node);

        action.proceed();
    }

    public delete() {
        let action = 
            new NodeDeleteAction(this.parent, this.folder);

        action.proceed();
    }
} 