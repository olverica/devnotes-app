import NoteValidator, {ValidatedNote} from '~/services/project/validators/note'
import FolderValidator, {ValidatedFolder} from '~/services/project/validators/folder'
import ParentValidator from '~/services/project/validators/bases/parent'
import equalsTo from '~/services/model/validation/rules/equals-to'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export type ValidatedRootChild = ValidatedNote|ValidatedFolder;

export interface ValidatedRoot {
    id: Key;
    type: 'root',
    children: ValidatedRootChild[]
}


export default class RootValidator extends ParentValidator<ValidatedRoot> {
    
    protected childValidators = [
        new NoteValidator(),
        new FolderValidator(),
    ]

    protected rules = {
        id: isKey,
        type: equalsTo('root'),
    }
}