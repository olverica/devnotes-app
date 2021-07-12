import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import {ValidatedRoot} from '~/services/project/validators/root'
import FolderConvertor from '~/services/project/convertors/folder'
import ParentConvertor from '~/services/project/convertors/bases/parent'
import TrashConvertor from '~/services/project/convertors/trash-bin'
import NoteConvertor from '~/services/project/convertors/note'


export default class RootConvertor extends ParentConvertor<ValidatedRoot, RootNode, RootChild> {

    protected childConvertors = {
        note: new NoteConvertor(),
        folder: new FolderConvertor(),
        trashBin: new TrashConvertor() 
    }
    
    
    protected createParent(model: ValidatedRoot, children: RootChild[]) {
        return new RootNode(
            model.id,
            children
        )
    }
}