import TreeParser from '~/services/notefs/parser'

describe('Tree parser', () => {

    let parser = new TreeParser();

    test('failed to generate if node id is invalid', () => {
        let root = {
            id: false
        };

        let callback = () =>
            parser.generate(root);

        expect(callback).toThrow();
    });

    test('failed to generate if node children is invalid', () => {
        let root = {
            id: 123,
            children: 'not an array'
        };

        let callback = () =>
            parser.generate(root);

        expect(callback).toThrow();
    })
});