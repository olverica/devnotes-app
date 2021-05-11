import NoteValidator from '~/services/notefs/parsers/validators/note'

interface DummyModel {
    id: unknown;
    name: unknown;
    type: unknown;
    description: unknown;
}

describe('Note validator', () => {
    
    let validador: NoteValidator;
    let model: DummyModel;

    beforeEach(() => {
        model = {
            id: 123,
            type: 'note',
            name: 'some',
            description: '...'
        };

        validador = new NoteValidator()
    });

    test('check returns true if model is correct', () => {
        let passed = validador.check(model);
        expect(passed).toBeTruthy();
    });

    test('check returns false if id is incorrect', () => {
        model.id = [];

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if name is incorrect', () => {
        model.name = [];
        
        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if type is incorrect', () => {
        model.type = 'not a note';

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });

    test('check returns false if description is incorrect', () => {
        model.description = 111;
        
        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });
});