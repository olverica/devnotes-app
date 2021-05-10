
import {Key} from '~/services/notefs/nodes/node' 


export interface ValidatedNode {
    id: Key;
    name: string;
}


export default abstract class  NodeValidator<T extends ValidatedNode> {
    
    protected abstract checkProps(model: object): boolean;
    
        
    public check(model: unknown): model is ValidatedNode{
        return this.isObject(model)
            && this.hasId(model)
            && this.hasName(model)
            && this.checkProps(model)
    }

    private hasId(model: object) {
        let id = (model as any).id;

        return typeof id === 'number' 
            || typeof id === 'string';
    }

    private hasName(model: object) {
        let name = (model as any).name;

        return typeof name === 'string'; 
    }

    private isObject(model: unknown): model is object  {
        return typeof model === 'object'
    }
}