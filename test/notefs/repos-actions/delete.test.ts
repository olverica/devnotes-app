import DeleteAction from '~/services/notefs/repos/actions/delete'
import ParentNode from '~/services/notefs/nodes/parent'
import TreeNode from '~/services/notefs/nodes/node'


class DummyChild implements TreeNode {
    public id = 0;
    public name = 'dummy'
}

class DummyParent extends ParentNode<DummyChild> {
    constructor() {
        let id = 1;
        let name = 'parent';

        super(id, name);
    }
}

class DummyDelete extends DeleteAction<DummyChild> {
    //
}


describe('Delete action', () => {
    
    let child: DummyChild;
    let parent: DummyParent;
    let action: DummyDelete;

    beforeEach(() => {
        child = new DummyChild();
        parent = new DummyParent();
        parent.append(child);

        action = new DummyDelete(parent, child);
    });
    
    test('proceed should detach child from parent', () => {
        action.proceed();
        
        let childIndex = 
            parent.children.indexOf(child);

        expect(childIndex).toBe(-1);
    });
});