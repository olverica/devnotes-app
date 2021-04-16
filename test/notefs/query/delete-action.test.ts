
import DeleteAction from '~/services/notefs/query/actions/delete'
import TreeContainer from '~/services/notefs/container'
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


interface TargetNode extends TreeNode {
    id: Key, parent: Key
}


describe('Delete action', () => {

    let container: TreeContainer;
    let deletion: DeleteAction;
    let target: TargetNode;
    let root: ParentNode;


    beforeEach(() => {
        target = {  id: 123, parent: 0 };
        root = { id: 0, children: [target] }

        container = new TreeContainer(root)
        deletion = new DeleteAction(container, target.id);
    });

    test('proceed should remove node from tree ', () => {
        deletion.proceed();

        expect(root.children.length).toEqual(0);
    });

    test('proceed should clear node parent', () => {
        deletion.proceed();

        expect(target.parent).toBe(undefined);
    })
});