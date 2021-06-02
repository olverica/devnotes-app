import RootContainer from '~/services/notefs/containers/root'
import RootNode from '~/services/notefs/nodes/root'
import Builder from '~/services/notefs/builder'


describe('Folder container', () => {

    let container: RootContainer;
    let root: RootNode;
    
    beforeEach(() => {
        root = Builder.root()
            .id(1)
            .name('root')
            .build();

        container = new RootContainer(root)
    });


    describe('update', () => {
        test('can change name', () => {
            let name = 'new name';
            container.update({name});

            expect(root.name).toBe(name);
        });
    });
});