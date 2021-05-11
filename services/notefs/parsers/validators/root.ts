import ParentValidator from '~/services/notefs/parsers/validators/parent'
import {ValidatedParent} from '~/services/notefs/parsers/validators/parent'


export type ValidatedRoot = ValidatedParent 


export default class RootValidator extends ParentValidator<ValidatedRoot> {
  
    protected hasType(type: unknown) {
        return type === 'root';
    }
}