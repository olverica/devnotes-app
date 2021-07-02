import FolderNode, {FolderPermission} from '~/services/notefs/nodes/folder'
import isFolderPermission from '~/services/model/validation/rules/folder-permission'
import {SimpleParser} from '~/services/model/parser'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export interface ValidatedFolder {
    id: Key;
    parent: Key;
    name: string;
    permission: FolderPermission;
}

export default class FolderParser extends SimpleParser<ValidatedFolder, FolderNode> {

    rules() {
       return {
            id: isKey,
            parent: isKey,
            name: isString,
            permission: isFolderPermission
        }
    }

    convert(model: ValidatedFolder) {
        return new FolderNode(
            model.id,
            model.name,
            model.permission,
            []
        )
    }
}