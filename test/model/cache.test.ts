import ModelCache from '~/services/model/cache/container'

interface DummyModel {
    id: number|string,
    name?: string
}

describe('Model cache', () => {

    let cache: ModelCache<DummyModel>;
    let target: DummyModel;


    beforeEach(() => {
        cache = new ModelCache<DummyModel>();
        target = {id: 123, name: 'dummy'};
    });


    describe('save', () => {
        test('saves model', () => {
            cache.save(target);
            let founded = cache.get(target.id);

            expect(founded).toBe(target);
        });
    });

    describe('saved', () => {
        test('returns all model', () => {
            cache.save(target);
            let models = cache.saved()

            expect(models.length).toBe(1)
        });
    });

    describe('clear', () => {
        test('removes all saved models', () => {
            cache.save(target);
            cache.clear();
            let models = cache.saved()

            expect(models.length).toBe(0)
        });
    });

    describe('remove', () => {
        test('saves model', () => {
            cache.save(target);
            cache.remove(target.id);

            let hasModel = cache.has(target.id); 
            expect(hasModel).toBeFalsy();
        });

        test('throws error if removing model isnt saved', () => {
            let remove = () =>
                cache.remove(123);

            expect(remove).toThrow()
        })
    });

    describe('get', () => {
        test('returns saved model', () => {
            cache.save(target);
            let founded = cache.get(target.id);
            
            expect(founded).toBe(target);
        });

        test('throws error when cant find model', () => {
            let get = () =>
                cache.get(123);

            expect(get).toThrow()
        })
    });

    describe('has', () => {
        test('returns true if model saved', () => {
            cache.save(target);
            let founded = cache.has(target.id);
            
            expect(founded).toBeTruthy();
        });

        test('returns false if model isnt saved', () => {
            let founded = cache.has(target.id);

            expect(founded).toBeFalsy();
        })
    });

    describe('empty', () => {
        test('returns true if it doesnt have any model', () => {
            let empty = cache.empty();

            expect(empty).toBeTruthy();
        })

        test('returns false if has any model', () => {
            cache.save(target);
            let empty = cache.empty();
            
            expect(empty).toBeFalsy();
        });
    });
});