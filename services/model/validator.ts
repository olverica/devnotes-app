import ValidationTarget from '~/services/model/validation/target'
import ValidationRule from '~/services/model/validation/rule'


export interface RulesCollection {
    [key: string]: ValidationRule
}


export default class ModelValidator<ValidatedModel extends object> {

    protected rules: RulesCollection = {
        //
    }


    constructor(rules?: RulesCollection) {
        if (rules)
            this.rules = rules;
    }

    public eat(model: unknown): model is ValidatedModel {
        if (!!!this.validateable(model))
            return false; 

        if (!!!this.validate(model))
            return false;
        
        return true;
    }

    private validate(model: ValidationTarget): boolean {
        let entries = Object.entries(this.rules);

        for (let [key, rule] of entries) {
            let prop = model[key];

            if (!!!rule(prop))
                return false
        }

        return true;
    }

    private validateable(model: unknown): model is ValidationTarget {
        return typeof model === "object";
    }
}