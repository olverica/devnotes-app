import NodePathFinder from '~/services/notefs/tools/node-path-finder'
import RootNode from '~/services/notefs/nodes/root'
import NoteNode from '~/services/notefs/nodes/note'
import Builder from '~/services/notefs/builder'


describe('Detach action', () => {
    
    let pathFinder: NodePathFinder;
    let notLinkedNode: NoteNode;
    let root: RootNode;
    let note: NoteNode;

    

    beforeEach(() => {
        notLinkedNode = Builder.note()
            .id(2)
            .name('note')
            .build();

        note = Builder.note()
            .id(2)
            .name('note')
            .build();

        root = Builder.root()
            .id(3)
            .name('note')
            .children([note])
            .build();
            

        pathFinder = new NodePathFinder(root);
    });
    
    test('build retursn node path', () => {
        let path = pathFinder.build(note)
        let expectedPath = [note, root];

        expect(path).toEqual(
            expect.arrayContaining(expectedPath));
    });

    test('build returns path with single target if target is not in the tree', () => {
        let path = pathFinder.build(notLinkedNode);

        expect(path).toEqual(
            expect.arrayContaining([notLinkedNode]));
    });
});