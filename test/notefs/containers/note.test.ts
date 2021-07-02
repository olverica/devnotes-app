import NoteContainer from '~/services/notefs/containers/note'
import NoteNode from '~/services/notefs/nodes_deprecated/note'
import Builder from '~/services/notefs/builder'


describe('Note container', () => {

    let container: NoteContainer;
    let note: NoteNode;

    
    beforeEach(() => {
        note = Builder.note()
            .id(1)
            .name('note')
            .build();

        container = new NoteContainer(note)
    });


    describe('update', () => {
        test('can change name', () => {
            let name = 'new name';
            container.update({name});
            
            expect(note.name).toBe(name);
        });

        test('can change description', () => {
            let description = 'something';
            container.update({description});

            expect(note.description).toBe(description);
        });
    });
});