import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedFolder {
    id: Key;
    name: string;
    children: unknown[]
}


export default class FolderValidator extends NodeValidator<ValidatedFolder> {

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

        return type === 'folder';
    }
}