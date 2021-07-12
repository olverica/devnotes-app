import ApiQueryBuilder from '~/services/api/query/builder'
import {ApiMock} from '~/test/fakes/api'


describe('Api query builder', () => {

    let api: ApiMock;
    let query: ApiQueryBuilder;


    beforeEach(() => {
        api = new ApiMock();
        query = new ApiQueryBuilder(api);
    });


    describe('get', () => {
        test('calls api get', () => {
            query.get('dummy')
                 .asObject();

            expect(api.getCalled).toBeTruthy();
        });
    });

    describe('patch', () => {
        test('calls api pacth', () => {
            query.patch('dummy', {})
                 .asObject();

            expect(api.patchCalled).toBeTruthy();
        });
    });

    describe('create', () => {
        test('calls api create', () => {
            query.post('dummy', {})
                 .asObject();

            expect(api.postCalled).toBeTruthy();
        });
    });
});