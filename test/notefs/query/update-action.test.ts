
import UpdateAction from '~/services/notefs/query/actions/update'
import TreeContainer from '~/services/notefs/container'
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


interface TargetNode extends TreeNode {
    id: Key, 
    parent: Key,
    dummyField: unknown
}

describe('Update action', () => {

    let container: TreeContainer;
    let target: TargetNode;
    let root: ParentNode;

    beforeEach(() => {
        target = { id: 123, parent: 0, dummyField: ''};
        root = { id: 0, children:[target] };
      
        container = new TreeContainer(root);
    });

    test('proceed should update target', () => {
        let model = { dummyField: 'is'};
        let updating = new UpdateAction(container, target.id, model);

        target.dummyField = 'was';
        updating.proceed();

        expect(target.dummyField).toEqual(model.dummyField);
    });

    test('proceed failes if model has predefined properties', () => {
        let model = { id: 'some' };
        let updating = new UpdateAction(container, target.id, model);

        let callback = () =>
            updating.proceed();

        expect(callback).toThrow();
    });
});