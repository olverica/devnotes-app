import RootValidator from '~/services/notefs/parsers/validators/root'

interface DummyModel {
    id: unknown;
    name: unknown;
    type: unknown;
    children: unknown;
}

describe('Note validator', () => {
    
    let validador: RootValidator;
    let model: DummyModel;

    beforeEach(() => {
        model = {
            id: 123,
            type: 'root',
            name: 'some',
            children: []
        }

        validador = new RootValidator()
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

    test('check returns false if children is incorrect', () => {
        model.children = 'some';

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });
});