import equalsTo from '~/services/model/validation/rules/equals-to'
import isString from '~/services/model/validation/rules/string'
import ModelValidator from '~/services/model/validator'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export interface ValidatedNote {
    id: Key;
    type: 'note',
    name: string;
    description: string;
}


export default class NoteValidator extends ModelValidator<ValidatedNote> {

    protected rules = {
        id: isKey,
        type: equalsTo('note'),
        name: isString,
        description: isString,
    }
}