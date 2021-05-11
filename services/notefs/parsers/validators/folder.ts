import {FolderPermission} from '~/services/notefs/nodes/folder'
import {ValidationTarget} from '~/services/notefs/parsers/validators/node'
import {ValidatedParent} from '~/services/notefs/parsers/validators/parent'
import ParentValidator from '~/services/notefs/parsers/validators/parent'


export interface ValidatedFolder extends ValidatedParent {
    permission: FolderPermission
} 


export default class FolderValidator extends ParentValidator<ValidatedFolder> {
  
    protected hasType(type: unknown) {
        return type === 'folder';
    }

    protected checkProps(model: ValidationTarget): boolean {
        let {permission} = model;

        return this.hasPermission(permission);
    }

    private hasPermission(permission: unknown) {
        return permission === FolderPermission.Protected
            || permission === FolderPermission.Private
            || permission === FolderPermission.Public;
    }
}