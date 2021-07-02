import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import {ValidatedRoot} from '~/services/project/validators/root'
import ParentConvertor from '~/services/project/convertors/bases/parent'
import FolderConvertor from '~/services/project/convertors/folder'
import NoteConvertor from '~/services/project/convertors/note'


export default class RootConvertor extends ParentConvertor<ValidatedRoot, RootNode, RootChild> {

    protected childConvertors = {
        note: new NoteConvertor(),
        folder: new FolderConvertor()
    }
    
    
    protected createParent(model: ValidatedRoot, children: RootChild[]) {
        return new RootNode(
            model.id,
            children
        )
    }
}