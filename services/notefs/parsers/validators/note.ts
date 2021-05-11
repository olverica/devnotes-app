import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedNote {
    id: Key;
    name: string;
    description?: string;
}


export default class NoteValidator extends NodeValidator<ValidatedNote> {

    protected hasType(type: unknown) {
        return type === 'note';
    }

    protected checkProps(model: object): boolean {
        return this.hasDescription(model)
    }

    private hasDescription(model: object) {
        let description = (model as any).description;

        return typeof description === 'undefined'
            || typeof description === 'string'
    }
}