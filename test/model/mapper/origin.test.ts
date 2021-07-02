import MapperOrigin from '~/services/model/mapper/origin'


describe('Mapper origin', () => {

    let origin: MapperOrigin;
    let path: string;


    beforeEach(() => {
        path  = 'my/path';
        origin = new MapperOrigin(path);
    })


    describe('makePath', () => {
        test('returns raw path if key isnt passed', () => {
            let createdPath = origin.makePath();

            expect(createdPath).toBe(path);
        });

        test('returns path with appended key if arg is passed', () => {
            let key = '1'
            let createdPath = origin.makePath(key);

            expect(createdPath).toBe(path + '/' + key);
        });
    });
});