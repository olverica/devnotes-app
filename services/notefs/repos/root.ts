import RootAppendAction from '~/services/notefs/repos/actions/append/root'
import RootGetAction  from '~/services/notefs/repos/actions/get/root'
import {RootChild} from '~/services/notefs/nodes/root'
import NodeRepository from '~/services/notefs/repos/node'
import RootNode from '~/services/notefs/nodes/root'


export default class RootRepository implements NodeRepository {
    
    
    private root: RootNode;


    constructor(root: RootNode) {
        this.root = root;
    }

    public get(): RootNode {
        let action = 
            new RootGetAction(this.root);

        return action.proceed();
    }

    public append(node: RootChild) {
        let action = 
            new RootAppendAction(this.root, node);

        action.proceed();
    }

    public update(model: unknown) {
        //
    }

    public delete() {
        // 
    }
} 