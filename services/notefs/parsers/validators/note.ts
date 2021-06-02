import {ValidationTarget} from '~/services/notefs/parsers/validators/node'
import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/node' 


export interface ValidatedNote {
    id: Key;
    name: string;
    tag?: Key;
    description?: string;
}


export default class NoteValidator extends NodeValidator<ValidatedNote> {

    protected hasType(type: unknown) {
        return type === 'note';
    }

    protected checkProps(model: ValidationTarget): boolean {
        let {description} = model;

        return this.hasDescription(description)
    }

    private hasDescription(description: unknown) {
        return typeof description === 'undefined'
            || typeof description === 'string';
    }
}