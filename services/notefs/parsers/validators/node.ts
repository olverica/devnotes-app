import {Key} from '~/services/notefs/node' 


export interface ValidatedNode {
    id: Key;
    name: string;
}

export interface ValidationTarget {
    [index: string]: unknown
}


export default abstract class  NodeValidator<T extends ValidatedNode> {
    
    public check(model: unknown): model is T {
        return this.isObject(model)
            && this.isNode(model)
            && this.checkProps(model)
    }

    private isNode({id, name, type}: ValidationTarget) {
        return this.hasId(id)
            && this.hasName(name)
            && this.hasType(type)
    }

    private isObject(model: unknown): model is ValidationTarget  {
        return typeof model === 'object'
    }

    private hasId(id: unknown) {
        return typeof id === 'number' 
            || typeof id === 'string';
    }

    private hasName(name: unknown) {
        return typeof name === 'string'; 
    }

    protected hasType(type: unknown) {
        return true;
    }

    protected checkProps(model: ValidationTarget): boolean {
        return true;
    }
}