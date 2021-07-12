import ApiQueryRunner, {Callback} from '~/services/api/query/runner'
import {ResponseMock} from '~/test/fakes/api'


describe('Api query runner', () => {

    let runner: ApiQueryRunner;
    let response: ResponseMock;
    let callback: Callback;


    beforeEach(() => {
        callback = async () => 
            response = new ResponseMock();

        runner = new ApiQueryRunner(callback); 
    });


    describe('asArray', () => {
        test('calls response asArray', async () => {
            await runner.asArray();

            expect(response.asArrayCalled).toBeTruthy();
        });
    });

    describe('asObject', () => {
        test('calls response asObject', async () => {
            await runner.asObject();

            expect(response.asObjectCalled).toBeTruthy();
        });
    });

    describe('raw', () => {
        test('calls response raw', async () => {
            await runner.raw();

            expect(response.rawCalled).toBeTruthy();
        });
    });
});