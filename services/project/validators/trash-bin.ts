import GarbageValidator, {ValidatedGarbage} from '~/services/project/validators/garbage'
import ParentValidator from '~/services/project/validators/bases/parent'
import equalsTo from '~/services/model/validation/rules/equals-to'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export type ValidatedTrashChild = ValidatedGarbage;

export interface ValidatedTrash {
    id: Key;
    type: 'trash-bin',
    children: ValidatedTrashChild[]
}


export default class TrashValidator extends ParentValidator<ValidatedTrash> {
    
    protected childValidators = [
        new GarbageValidator()
    ]

    protected rules = {
        id: isKey,
        type: equalsTo('trash-bin'),
    }
}