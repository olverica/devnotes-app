import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedRoot {
    id: Key;
    name: string;
    children: [];
}


export default class RootValidator extends NodeValidator<ValidatedRoot> {
  
    protected checkProps(model: object): boolean {
        return this.hasChildren(model)
            && this.hasType(model);
    }
  
    private hasChildren(model: object) {
        let children = (model as any).children;

        return Array.isArray(children); 
    }

    private hasType(model: object) {
        let type = (model as any).type;

        return type === 'root';
    }
}