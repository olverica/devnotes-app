import ModelValidator from '~/services/model/validator'
import Model from '~/services/model'


export interface ValidatedParent {
    children: Model[]
}

export default class FolderValidator<Validated extends ValidatedParent> extends ModelValidator<Validated> {

    protected childValidators: ModelValidator<Model>[] = [];


    constructor() {
        super();
        this.rules.children = this.validatedChildren;
    }
    
    private validatedChildren(children: unknown): boolean {
        if (!!!Array.isArray(children))
            return false;

        for (let child of children) {
            if (!!!this.validateChild(child))
                return false;
        }

        return true;
    }

    private validateChild(child: unknown) {
        for (let validator of this.childValidators) {
            if (validator.eat(child))
                return true;
        }

        return false;
    }
}