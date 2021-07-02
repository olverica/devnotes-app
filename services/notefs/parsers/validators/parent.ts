import {ValidatedNode} from '~/services/notefs/parsers/validators/node'
import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/node' 


export interface ValidatedParent {
    id: Key;
    name: string;
    children: unknown[]
}


export default abstract class ParentValidator<T extends ValidatedParent = ValidatedParent> extends NodeValidator<ValidatedNode> {

    public check(model: unknown): model is T {
        if (!!!super.check(model))
            return false;

        let {children} = model as any;
        return this.hasChildren(children);
    }

    protected hasChildren(children: unknown) {
        return Array.isArray(children); 
    }
}