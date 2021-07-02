import FolderNode, {FolderChild} from '~/services/notefs/nodes/folder'
import {ValidatedFolder} from '~/services/project/validators/folder'
import ParentConvertor from '~/services/project/convertors/bases/parent'
import NoteConvertor from '~/services/project/convertors/note'
import TagConvertor from '~/services/project/convertors/tag'


export default class FolderConvertor extends ParentConvertor<ValidatedFolder, FolderNode, FolderChild> {

    protected childConvertors = {
        note: new NoteConvertor(),
        tag: new TagConvertor()
    }
    
    protected createParent(model: ValidatedFolder, children: FolderChild[]) {
        return new FolderNode(
            model.id,
            model.name,
            model.permission,
            children
        )
    }
}