import TagValidator from '~/services/notefs/parsers/validators/tag'

interface DummyModel {
    id: unknown;
    name: unknown;
    type: unknown;
    color: unknown;
    children: unknown;
}

describe('Note validator', () => {
    
    let validador: TagValidator;
    let model: DummyModel;

    beforeEach(() => {
        model = {
            id: 123,
            type: 'tag',
            name: 'some',
            color: 'red',
            children: []
        }

        validador = new TagValidator()
    });

    test('check returns true if model is correct', () => {
        let passed = validador.check(model);
        expect(passed).toBeTruthy();
    });

    test('check returns false if id is incorrect', () => {
        model.id = undefined;

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });


    test('check returns false if type is incorrect', () => {
        model.type = 'asda';

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if name is incorrect', () => {
        model.name = 88;

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if color is incorrect', () => {
        model.color = 1;

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if children is incorrect', () => {
        model.children = 'some';

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });
});