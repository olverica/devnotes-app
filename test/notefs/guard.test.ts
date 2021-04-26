import NodeGuard from '~/services/notefs/guard'


class DummyGuard extends NodeGuard{
    public readonly type = 'dummy';
}

describe('Node guard', () => {

    test('check validates shoud validate object properties', () => {
        let node = {
            id: 'some',
            type: 'dummy'
        };

        let guard = new DummyGuard();
        let validated = guard.check(node);
    
        expect(validated).toBeTruthy();
    })
    

    test('check failes if id is incorrect', () => {
        let node = {
            id: undefined,
            type: 'some',
        };

        let guard = new DummyGuard();
        let validated = guard.check(node);
    
        expect(validated).toBeFalsy();
    });

    test('check failes if type is incorrect', () => {
        let node = {
            id: 123,
            type: 'incorrect',
        };

        let guard = new DummyGuard();
        let validated = guard.check(node);
    
        expect(validated).toBeFalsy();
    });

    test('check failes if children is incorrect', () => {
        let node = {
            id: 123,
            type: 'dummy',
            children:'incorrect'
        };

        let guard = new DummyGuard();
        let validated = guard.check(node);
    
        expect(validated).toBeFalsy();
    });
});