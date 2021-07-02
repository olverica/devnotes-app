import NoteValidator, {ValidatedNote} from '~/services/project/validators/note'
import ParentValidator from '~/services/project/validators/bases/parent'
import equalsTo from '~/services/model/validation/rules/equals-to'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export type ValidatedTagChild = ValidatedNote;

export interface ValidatedTag {
    id: Key;
    type: 'tag',
    name: string;
    color: string;
    children: ValidatedTagChild[]
}


export default class TagValidator extends ParentValidator<ValidatedTag> {
    
    protected childValidators = [
        new NoteValidator()
    ]

    protected rules = {
        id: isKey,
        name: isString,
        color: isString,
        type: equalsTo('tag'),
    }
}