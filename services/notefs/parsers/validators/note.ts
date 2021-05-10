import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedNote {
    id: Key;
    name: string;
    description?: string;
}


export default class NoteValidator extends NodeValidator<ValidatedNote> {

    protected checkProps(model: object): boolean {
        return this.hasDescription(model)
            && this.hasType(model);
    }

    private hasDescription(model: object) {
        let description = (model as any).description;

        return typeof description === undefined
            || typeof description === 'string'
    }

    private hasType(model: object) {
        let type = (model as any).type;

        return type === 'note';
    }
}