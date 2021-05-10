import NodeSearcher from '~/services/notefs/seachers/node'
import RootNode from '~/services/notefs/nodes/root'
import NoteNode from '~/services/notefs/nodes/note'
import Builder from '~/services/notefs/builder'


describe('Node seacher', () => {

    let seacher: NodeSearcher;
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

        seacher = new NodeSearcher(parent);
    });
    
    test('find should return node if id is valid', () => {
        let founded = 
            seacher.find(child.id);

        expect(founded).toBe(child);
    });

    test('find should return null if id is invalid', () => {
        let founded = 
            seacher.find('i am dummyyy');

        expect(founded).toBe(null);
    });

    test('findOrFail should fail if id is invalid', () => {
        let searching = () =>
            seacher.findOrFail('i am dummyyy');

        expect(searching).toThrow();
    });
});