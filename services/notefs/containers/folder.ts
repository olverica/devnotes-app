import FolderNode, {FolderPermission, FolderChild} from '~/services/notefs/nodes/folder'
import ParentContainer from '~/services/notefs/containers/parent'


export interface FolderUpdateRequest {
    name?: string;
    permission?: FolderPermission;
}   


export default class FolderContainer extends ParentContainer<FolderChild> {
    
    protected node!: FolderNode; 


    constructor(node: FolderNode) {
        super(node)
    }

    public update(request: FolderUpdateRequest) {
        let {name, permission} = request;

        if (name !== undefined)
            this.node.name = name;

        if (permission !== undefined)
            this.node.permission = permission;
    }
} 