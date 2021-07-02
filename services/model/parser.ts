import {RulesCollection} from '~/services/model/validator'
import ModelValidator from '~/services/model/validator'
import Model from '~/services/model'


export default interface ModelParser<Converted extends Model> {
    
    eat(model: unknown): Converted;
}


export abstract class SimpleParser<Validated extends Model, Converted extends Model> implements ModelParser<Converted>  {
    
    protected abstract rules(): RulesCollection ;

    protected abstract convert(model: Validated): Converted;

    
    public eat(model: unknown): Converted {
        if (!!!this.validate(model))
            throw Error('Model has incorrect format');

        return this.convert(model);
    }

    public validate(model: unknown): model is Validated {
        let rules = this.rules();
        let validator = new ModelValidator<Validated>(rules);
    
        return validator.eat(model);
    }
}