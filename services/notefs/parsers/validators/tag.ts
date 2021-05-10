import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedTag {
    id: Key;
    name: string;
    color: string;
    children: unknown[]
}


export default class TagValidator extends NodeValidator<ValidatedTag> {

    protected checkProps(model: object): boolean {
        return this.hasChildren(model)
            && this.hasColor(model)
            && this.hasType(model);
    }
  
    private hasChildren(model: object) {
        let children = (model as any).children;

        return Array.isArray(children); 
    }

    private hasColor(model: object) {
        let type = (model as any).type;

        return typeof type === 'string';
    }

    private hasType(model: object) {
        let type = (model as any).type;

        return type === 'tag';
    }
}