import {SimpleParser} from '~/services/model/parser'
import NoteNode from '~/services/notefs/nodes/note'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export interface ValidatedNote {
    id: Key;
    parent: Key;
    name: string;
    description: string;
}


export default class NoteParser extends SimpleParser<ValidatedNote, NoteNode> {

    rules() {
       return {
            id: isKey,
            parent: isKey,
            name: isString,
            description: isString
        }
    }

    convert(model: ValidatedNote) {
        return new NoteNode(
            model.id,
            model.name,
            model.description
        )
    }
}