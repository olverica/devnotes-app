
import TreeContainer from '~/services/notefs/container'
import GetAction from '~/services/notefs/query/actions/get'


describe('Get action', () => {
    
    test('proceed should return correct node ', () => {
        let key = 123;

        let target = { 
            id: key, parent: 0
        };

        let container = new TreeContainer({
            id: 0, children: [target] 
        })

        let searching = new GetAction(container, key);
        let founded = searching.proceed();

        expect(founded).toEqual(target);
    });
});