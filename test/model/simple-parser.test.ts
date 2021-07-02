import ModelValidator from '~/services/model/validator'
import ModelConvertor from '~/services/model/convertor'
import {SimpleParser} from '~/services/model/parser'


interface DummyToParse {
    id: number|string;
    name: string;
}

class ConvertorFake implements ModelConvertor<DummyToParse, DummyToParse> {
    
    public passedModel?: DummyToParse;

    public returnedModel?: DummyToParse;


    public eat(model: DummyToParse) {
        this.passedModel = model;

        this.returnedModel = {
            id: 'absolutely',
            name: 'new dummy'
        };

        return this.returnedModel;
    }
}

class ValidatorMock extends ModelValidator<DummyToParse> {

    public passedModel: unknown;


    public eat(model: unknown) {
        this.passedModel = model;

        return super.eat(model);
    }
}

class ParserStub extends SimpleParser<DummyToParse, DummyToParse> {
    
}

describe('Model parser', () => {

    let validator: ValidatorMock;
    let convertor: ConvertorFake;
    let target: DummyToParse;
    let parser: ParserStub;


    beforeEach(() => {
        validator = new ValidatorMock();
        convertor = new ConvertorFake();
        parser = new ParserStub(validator, convertor);

        target = {id: 1, name: 'dummy'};
    });


    describe('constructcs', () => {
        test('without convertor fails', () => {
            let build = () =>
                new ParserStub(validator, undefined);

            expect(build).toThrow();
        });

        test('without validator fails', () => {
            let build = () =>
                new ParserStub(undefined, convertor);

            expect(build).toThrow();
        });
    });
    
    describe('eat', () => {
        test('calls validator eat', () => {
            parser.eat(target);

            expect(validator.passedModel).toBe(target);
        });

        test('calls convertor eat', () => {
            parser.eat(target);

            expect(convertor.passedModel).toBe(target);
        })

        test('returns converted model', () => {
            let parsed = parser.eat(target);

            expect(parsed).toBe(convertor.returnedModel);
        })
    });
});