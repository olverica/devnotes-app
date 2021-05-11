import FolderValidator from '~/services/notefs/parsers/validators/folder'

interface DummyModel {
    id: unknown;
    name: unknown;
    type: unknown;
    children: unknown;
    permission: unknown;
}

describe('Note validator', () => {
    
    let validador: FolderValidator;
    let model: DummyModel;

    beforeEach(() => {
        model = {
            id: 123,
            type: 'folder',
            name: 'some',
            permission: 'protected',
            children: []
        }

        validador = new FolderValidator()
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

    test('check returns false if permission is incorrect', () => {
        model.permission = 'some';

        let passed = validador.check(model);
        expect(passed).toBeFalsy();
    });
});