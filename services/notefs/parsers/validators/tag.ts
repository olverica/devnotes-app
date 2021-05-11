import {ValidationTarget} from '~/services/notefs/parsers/validators/node'
import ParentValidator from '~/services/notefs/parsers/validators/parent'
import {Key} from '~/services/notefs/nodes/node' 

export interface ValidatedTag {
    id: Key;
    name: string;
    color: string;
    children: unknown[]
}


export default class TagValidator extends ParentValidator<ValidatedTag> {

    protected checkProps(model: ValidationTarget): boolean {
        let {color} = model;

        return this.hasColor(color);
    }
  
    private hasColor(color: unknown) {
        return typeof color === 'string';
    }

    protected hasType(type: unknown) {
        return type === 'tag';
    }
}