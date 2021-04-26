import DeleteAction from '~/services/notefs/query/actions/delete'
import TreeNode, {ParentNode} from '~/services/notefs/node'


describe('Delete action', () => {

    let deletion: DeleteAction;
    let target: TreeNode;
    let root: ParentNode;


    beforeEach(() => {
        target = {  id: 123 };
        root = { id: 0, children: [target] }
    });

    test('proceed should remove node from tree ', () => {
        deletion = new DeleteAction(root, target.id);
        deletion.proceed();

        let indexOfDeleted= 
            root.children.indexOf(target);

        expect(indexOfDeleted).toEqual(-1);
    });
});