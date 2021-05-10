import AppendAction from '~/services/notefs/repos/actions/append'
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

class DummyAppend extends AppendAction<DummyChild> {
    //
}


describe('Append action', () => {

    let child: DummyChild;
    let parent: DummyParent;
    let action: DummyAppend;

    beforeEach(() => {
        child = new DummyChild();
        parent = new DummyParent();
        action = new DummyAppend(parent, child);
    });
    
    test('proceed should append child to parent', () => {
        action.proceed();
        
        let childIndex = 
            parent.children.indexOf(child);

        expect(childIndex).not.toBe(-1);
    });
});