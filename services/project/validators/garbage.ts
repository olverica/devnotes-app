import FolderValidator, {ValidatedFolder} from '~/services/project/validators/folder'
import ModelValidator, {RulesCollection} from '~/services/model/validator'
import NoteValidator, {ValidatedNote} from '~/services/project/validators/note'
import equalsTo from '~/services/model/validation/rules/equals-to'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export type ValidatedGarbageChild = ValidatedNote|ValidatedFolder;

export interface ValidatedGarbage {
    id: Key;
    type: 'garbage',
    deletedAt: string,
    node: ValidatedGarbageChild
}


export default class GarbageValidator extends ModelValidator<ValidatedGarbage> {
    
    protected nodeValidators = [
        new NoteValidator(),
        new FolderValidator(),
    ]

    protected rules: RulesCollection = {
        id: isKey,
        type: equalsTo('garbage'),
        deletedAt: isString,
    }

    constructor() {
        super();
        this.rules.node = this.validateNode;
    }

    private validateNode(node: unknown): node is ValidatedGarbageChild {
        for (let validator of this.nodeValidators) {
            if (validator.eat(node))
                return true;
        }

        return false;
    }
}