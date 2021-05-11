import UpdateAction from '~/services/notefs/repos/actions/update'
import TreeNode from '~/services/notefs/nodes/node'


interface DummyUpdateModel {
    name: string
}

class DummyNode implements TreeNode {
    public id = 0;
    public name = 'dummy'
}

class DummyUpdate extends UpdateAction<DummyNode, DummyUpdateModel> {
    //
}


describe('Update action', () => {

    let node: DummyNode;
    let model: DummyUpdateModel;
    let action: DummyUpdate;

    beforeEach(() => {
        model = {
            name: 'some'
        };

        node = new DummyNode();
        action = new DummyUpdate(node, model);
    });
    
    test('proceed should update note properties', () => {
        action.proceed();
        
        expect(model.name).toBe(node.name);
    });
});