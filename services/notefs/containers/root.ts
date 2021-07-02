import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import ParentContainer from '~/services/notefs/containers/parent'


export interface RootUpdateRequest {
    name?: string;
}   


export default class RootContainer extends ParentContainer<RootChild> {
    
    protected node!: RootNode; 


    constructor(node: RootNode) {
        super(node)
    }

    public update(request: RootUpdateRequest) {
        let {name} = request;

        if (name !== undefined)
            this.node.name = name;
    }
} 