import GetAction from '~/services/notefs/repos/actions/get'
import TreeNode from '~/services/notefs/nodes/node'


class DummyNode implements TreeNode {
    public id = 0;
    public name = 'dummy';
}

class DummyGet extends GetAction<DummyNode> {
    //
}


describe('Get action', () => {
    let node: DummyNode;
    let action: DummyGet;

    beforeEach(() => {
        node = new DummyNode();
        action = new DummyGet(node);
    });
    
    test('proceed should return node', () => {
        let founded = action.proceed();

        expect(founded).toBe(node);
    });
});