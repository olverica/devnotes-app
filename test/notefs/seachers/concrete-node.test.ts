import ConcreteNodeSearcher from '~/services/notefs/seachers/concrete-node'
import RootNode from '~/services/notefs/nodes/root'
import NoteNode from '~/services/notefs/nodes/note'
import Builder from '~/services/notefs/builder'


class DummySearcher extends ConcreteNodeSearcher<NoteNode> {
    
    protected validate(node: unknown): node is NoteNode {
        return node instanceof NoteNode;
    }
}


describe('Concrete node seacher', () => {

    let seacher: DummySearcher;
    let parent: RootNode;
    let child: NoteNode;


    beforeEach(() => {
        child = Builder.note()
            .id(0)
            .name('some')
            .build();

        parent = Builder.root()
            .id(1)
            .name('some')
            .children([child])
            .build();

        seacher = new DummySearcher(parent);
    });
    
    test('find should return proper node', () => {
        let founded = 
            seacher.find(child.id);

        let correct = 
            founded instanceof NoteNode;

        expect(correct).toBeTruthy();
    });

    test('find should fail if founded node type is invalid', () => {
        let searching = () => 
            seacher.find(parent.id);

        expect(searching).toThrow();
    });

    test('findOrFail should fail if founded node type is invalid', () => {
        let searching = () =>
            seacher.findOrFail(parent.id);

        expect(searching).toThrow();
    });
});