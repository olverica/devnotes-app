import Cursor from '~/services/cursor'

describe('Tree cursor', () => {

    let cursor: Cursor;
    let node: number;


    beforeEach(() => {
        cursor = new Cursor<number>();
        node = 123;
    });


    test('selected by default should be null', () => {
        let selected = cursor.selected();
        expect(selected).toBe(null);
    });

    test('select changes selected node', () => {
        cursor.select(node)

        let selected = cursor.selected();
        expect(selected).toBe(node);
    });

    test('undo prevents last selection', () => {
        cursor.select(node);
        cursor.undo();

        let selected = cursor.selected();
        expect(selected).toBe(null);
    });

    test('undo fails if nothing has been selected', () => {
        let callback = 
            cursor.undo;

        expect(callback).toThrow();
    });

    test('redo prevents last undo', () => {
        cursor.select(node);
        cursor.undo();
        cursor.redo();

        let selected = cursor.selected();
        expect(selected).toBe(node);
    });

    test('redo fails if nothing has been undoed', () => {
        let callback = 
            cursor.redo;

        expect(callback).toThrow();
    });
})