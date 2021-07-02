import TagNode, {TagChild} from '~/services/notefs/nodes/tag'
import {ValidatedTag} from '~/services/project/validators/tag'
import ParentConvertor from '~/services/project/convertors/bases/parent'
import NoteConvertor from '~/services/project/convertors/note'


export default class TagConvertor extends ParentConvertor<ValidatedTag, TagNode, TagChild> {

    protected childConvertors = {
        note: new NoteConvertor()
    }
    
    protected createParent(model: ValidatedTag, children: TagChild[]) {
        return new TagNode(
            model.id,
            model.name,
            model.color,
            children
        )
    }
}