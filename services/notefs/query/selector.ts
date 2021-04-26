import AppendAction, {AppendModel} from '~/services/notefs/query/actions/append'
import UpdateAction, {UpdateModel} from '~/services/notefs/query/actions/update'
import DeleteAction from '~/services/notefs/query/actions/delete'
import MoveAction from '~/services/notefs/query/actions/move'
import GetAction from '~/services/notefs/query/actions/get'
import TreeNode, {Key} from '~/services/notefs/node'


export default class QuerySelector {

    private readonly root: TreeNode;

    private readonly key: Key;


    constructor(root: TreeNode, key: Key) {
        this.root = root;
        this.key = key;
    }

    public get() {
        let action = new GetAction(this.root, this.key);

        return action.proceed();
    }

    public delete() {
        let action = new DeleteAction(this.root, this.key);

        return action.proceed();
    }

    public moveTo(toKey: Key) {
        let action = 
            new MoveAction(this.root, this.key, toKey);

        return action.proceed();
    }

    public append(model: AppendModel) {
        let action = 
            new AppendAction(this.root, this.key, model);

        return action.proceed();
    }

    public update(model: UpdateModel) {
        let action = 
            new UpdateAction(this.root, this.key, model);

        return action.proceed();
    }
}