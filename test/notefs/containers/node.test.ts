import NodeContainer from '~/services/notefs/containers/node'
import TreeNode, {ParentNode} from '~/services/notefs/node'


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

    constructor(parent?: DummyParent) {
        this.parent = parent;
    }
}

class DummyContainer extends NodeContainer {
    
    constructor(node: DummyNode) {
        super(node);
    }

    public update() {
        //
    }
}


describe('Tree node container', () => {

    let container: DummyContainer;
    let parent: DummyParent;
    let node: DummyNode;


    beforeEach(() => {
        parent = new DummyParent();
        node = new DummyNode(parent);
        container = new DummyContainer(node);
    });


    describe('detach', () => {
        test('removes node from parent child list', () => {
            container.detach();
            let hasChild = parent.contains(node);

            expect(hasChild).toBeFalsy();
        });

        test('removes node parent link', () => {
            container.detach();
            expect(node.parent).toBeFalsy();
        });

        test('fails if node hasnt parent', () => {
            node.parent = undefined;
            expect(container.detach).toThrow();
        });
    });
});