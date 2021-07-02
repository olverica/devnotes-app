import TreeCreateAction from '~/services/notefs/mapper/actions/create'
import TreeUpdateAction from '~/services/notefs/mapper/actions/create'
import TreeDeleteAction from '~/services/notefs/mapper/actions/create'
import TreeMoveAction from '~/services/notefs/mapper/actions/create'


export default class TreeActionFabric {

    protected root: RootNode;


    constructor(root: RootNode) {
        this.root = root;
    }

    public create() {
        return new TreeCreateAction();
    }

    public update() {
        return new TreeUpdateAction();
    }

    public delete() {
        return new TreeDeleteAction();
    }

    public move() {
        return new TreeMoveAction();
    }
}