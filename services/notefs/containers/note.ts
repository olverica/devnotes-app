import NodeContainer from '~/services/notefs/containers/node'
import NoteNode from '~/services/notefs/nodes/note'
import {Tag} from '~/services/models/tag'


export interface NodeUdapteRequest {
    name?: string;
    description?: string;
    tag: Tag
}   


export default class NoteContainer extends NodeContainer {
    
    protected node!: NoteNode; 


    constructor(node: NoteNode) {
        super(node)
    }

    public update(request: NodeUdapteRequest) {
        let {name, description} = request;

        if (name !== undefined)
            this.node.name = name;

        if (description !== undefined)
            this.node.description = description;
    }
} 