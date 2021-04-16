
import AppendAction, {AppendModel} from '~/services/notefs/query/actions/append'
import UpdateAction, {UpdateModel} from '~/services/notefs/query/actions/update'
import DeleteAction from '~/services/notefs/query/actions/delete'
import MoveAction from '~/services/notefs/query/actions/move'
import GetAction from '~/services/notefs/query/actions/get'
import TreeContainer from '~/services/notefs/container'
import {Key} from '~/services/notefs/node'


export default class QuerySelector {

    private readonly container: TreeContainer;

    private readonly key: Key;


    constructor(container: TreeContainer, key: Key) {
        this.container = container;
        this.key = key;
    }

    public get() {
        let action = new GetAction(this.container, this.key);

        return action.proceed();
    }

    public delete() {
        let action = new DeleteAction(this.container, this.key);

        return action.proceed();
    }

    public moveTo(toKey: Key) {
        let action = 
            new MoveAction(this.container, this.key, toKey);

        return action.proceed();
    }

    public append(model: AppendModel) {
        let action = 
            new AppendAction(this.container, this.key, model);

        return action.proceed();
    }

    public update(model: UpdateModel) {
        let action = 
            new UpdateAction(this.container, this.key, model);

        return action.proceed();
    }
}