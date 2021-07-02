import FolderNode, {FolderPermission as Permission} from '~/services/notefs/nodes_deprecated/folder'
import FolderContainer from '~/services/notefs/containers/folder'
import Builder from '~/services/notefs/builder'


describe('Folder container', () => {

    let container: FolderContainer;
    let folder: FolderNode;
    
    beforeEach(() => {
        folder = Builder.folder()
            .id(1)
            .name('folder')
            .permission(Permission.Private)
            .build();

        container = new FolderContainer(folder)
    });


    describe('update', () => {
        test('can change name', () => {
            let name = 'new name';
            container.update({name});

            expect(folder.name).toBe(name);
        });

        test('can change permission', () => {
            let permission = Permission.Protected
            container.update({permission});

            expect(folder.permission).toBe(permission);
        });
    });
});