import {ValidatedNote} from '~/services/project/validators/note' 
import ModelConvertor from '~/services/model/convertor'
import NoteNode from '~/services/notefs/nodes/note'


export default class NoteConvertor implements ModelConvertor<ValidatedNote, NoteNode> {

    eat(model: ValidatedNote): NoteNode {
        return new NoteNode(
            model.id,
            model.name,
            model.description
        );
    }
}