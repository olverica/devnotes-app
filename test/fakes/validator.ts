import ValidationRule from '~/services/model/validation/rule'
import ModelValidator from '~/services/model/validator'


export interface ValidatedDummy {
    id: string|number
    name: string
}

export class RuleMock implements ValidationRule {
    
    public checkedProperty: unknown;


    check(property: unknown): boolean {
        this.checkedProperty = property;
        return true;
    }
}

export class ValidatorMock extends ModelValidator<ValidatedDummy> {

    public eatCalled = false;

    
    public eat(model: unknown) {
        this.eatCalled = true;
        return super.eat(model)
    }
}

export class ValidatorStub extends ModelValidator<ValidatedDummy> {
   
    constructor(ruleMock: RuleMock = new RuleMock()) {
        super();
        this.rules.name = ruleMock;
    }
}