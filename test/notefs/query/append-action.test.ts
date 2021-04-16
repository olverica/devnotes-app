
import AppendAction from '~/services/notefs/query/actions/append'
import TreeContainer from '~/services/notefs/container'
import TreeNode, {Key, ParentNode} from '~/services/notefs/node'


interface Target extends TreeNode {
    id: Key
}


describe('Append action', () => {

    let container: TreeContainer;
    let appending: AppendAction;
    let target: Target;
    let root: ParentNode;

    beforeEach(() => {
        target = { id: 123 };
        root = { id: 0, children: [] as TreeNode[] };

        container = new TreeContainer(root);
        appending = new AppendAction(container, root.id, target);
    });

    test('proceed should add node to children ', () => {
        appending.proceed();
        
        let appended = container.find(target.id)

        expect(appended.id).toEqual(target.id);
    });

    test('proceed should set parrent to node', () => {
        appending.proceed();
   
        let appended = container.find(target.id)

        expect(appended.parent).toEqual(root.id);
    });
});