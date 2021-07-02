import NoteValidator, {ValidatedNote} from '~/services/project/validators/note'
import TagValidator, {ValidatedTag} from '~/services/project/validators/tag'
import isFolderPermission from '~/services/model/validation/rules/folder-permission'
import {FolderPermission} from '~/services/notefs/nodes/folder'
import ParentValidator from '~/services/project/validators/bases/parent'
import equalsTo from '~/services/model/validation/rules/equals-to'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export type ValidatedFolderChild = ValidatedNote|ValidatedTag;

export interface ValidatedFolder {
    id: Key;
    type: 'folder',
    name: string;
    permission: FolderPermission;
    children: ValidatedFolderChild[]
}


export default class FolderValidator extends ParentValidator<ValidatedFolder> {
    
    protected childValidators = [
        new NoteValidator(),
        new TagValidator()
    ]

    protected rules = {
        id: isKey,
        type: equalsTo('folder'),
        name: isString,
        permission: isFolderPermission,
    }
}