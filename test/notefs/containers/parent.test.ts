import TreeNode, {ParentNode} from '~/services/notefs/node'
import ParentContainer from '~/services/notefs/containers/parent'


class DummyParent implements ParentNode {
    public id: number = 0;
    public name: string = 'parent';
    public children: DummyNode[] = [];

    public contains(node: DummyNode): boolean {
        let index = this.children.indexOf(node);
        return index !== -1;
    }
}

class DummyNode implements TreeNode {
    public id: number = 0;
    public name: string = 'node';
    public parent?: DummyParent;
}

class DummyContainer extends ParentContainer<DummyNode> {
    
    constructor(node: DummyParent) {
        super(node);
    }

    public update() {
        //
    }
}

describe('Parent container', () => {

    let container: DummyContainer;
    let parent: DummyParent;
    let child: DummyNode;

    
    beforeEach(() => {
        child = new DummyNode();
        parent = new DummyParent();
        container = new DummyContainer(parent)
    });


    describe('addChild', () => {
        test('pushes child to list', () => {
            container.addChild(child);

            let contains = parent.contains(child);
            expect(contains).toBeTruthy();
        });

        test('changes child parent link', () => {
            container.addChild(child);

            expect(child.parent).toBe(parent);
        })
    });

    describe('removeChild', () => {
        test('removes child from list', () => {
            container.addChild(child);
            container.removeChild(child);

            let contains = parent.contains(child);
            expect(contains).toBeFalsy();
        });

        test('fails if removes not linked child', () => {
            let removing = 
                container.removeChild;

            expect(removing).toThrow();
        });
    })
});