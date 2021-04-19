
import AppendAction from '~/services/notefs/query/actions/append'
import TreeNode, {ParentNode} from '~/services/notefs/node'


describe('Append action', () => {
    let appending: AppendAction;
    let target: TreeNode;
    let root: ParentNode;

    beforeEach(() => {
        target = { id: 123 };
        root = { id: 0, children: [] as TreeNode[] };
    });

    test('proceed should add node to children ', () => {
        appending = new AppendAction(root, root.id, target);
        appending.proceed();
        
        let indexOfAppended = 
            root.children.indexOf(target);

        expect(indexOfAppended).not.toEqual(-1);
    });
});