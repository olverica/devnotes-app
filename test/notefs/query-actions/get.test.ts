import GetAction from '~/services/notefs/query/actions/get'
import TreeNode, {ParentNode} from '~/services/notefs/node'


describe('Get action', () => {

    let target: TreeNode;
    let root: ParentNode;


    beforeEach(() => {
        target = {  id: 123 };
        root = { id: 0, children: [target] }
    });

    test('proceed should return correct node ', () => {

        let retrieving = new GetAction(root, target.id);
        let founded = retrieving.proceed();

        expect(founded).toEqual(target);
    });
});