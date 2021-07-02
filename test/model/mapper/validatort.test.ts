import ValidationRule from '~/services/model/validation/rule'
import ModelValidator from '~/services/model/validator'


interface DummyModel {
    id: number|string,
    name: string
}


class ValidatorStub extends ModelValidator<DummyModel> {
    constructor(ruleForName: ValidationRule) {
        super();

        this.rules = {
            name: ruleForName
        }
    }
}


class RuleMock  {
    public mustFail: boolean = false;

    public passedProp: unknown;

    check(prop: unknown) {
        this.passedProp = prop;
        return !!!this.mustFail;
    }
}


describe('Model Validator', () => {

    let validator: ValidatorStub;
    let rule: RuleMock;


    beforeEach(() => {
        rule = new RuleMock();
        validator = new ValidatorStub(rule.check)
    });


    describe('eat', () => {
        test('calls rules check with correct propety', () => {
            let target = {
                id: 333,
                name: 'dummy'
            };

            validator.eat(target);
            expect(rule.passedProp).toBe(target.name)
        });

        test('throws error if rule returns false', () => {
            let parse = () =>
                validator.eat({});

            rule.mustFail = true;

            expect(parse).toThrow()
        });

        test('throws error if passed model isnt an object', () => {
            let notAnObject = 123;
            let callback =  () =>
                validator.eat(notAnObject);

            expect(callback).toThrow()
        });
    });
})