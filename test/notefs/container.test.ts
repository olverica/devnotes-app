
import TreeContainer from '~/services/notefs/container'
import TreeNode from '~/services/notefs/node'

describe('Query container', () => {
    
    test('find should return correct model in tree', () => {
        let key = 123;

        let target: TreeNode = { 
            id: key, parent: 0
        };

        let root: TreeNode = {
            id: 0, children: [target] 
        }

        let container = new TreeContainer(root);
        let founded = container.find(key);

        expect(founded).toEqual(target);
    });
});