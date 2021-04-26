import NodeTreeSearcher from '~/services/notefs/searchers/node'
import TreeNode from '~/services/notefs/node'

describe('parent searcher', () => {
    
    let root: TreeNode;
    let target: TreeNode;

    
    beforeEach(() => {
        target = { id: 123 };
        root = { id: 0, children: [target] }
    });

    test('find should return correct node', () => {

        let searcher = new NodeTreeSearcher(root);
        let founded = searcher.find(target.id);

        expect(founded).toEqual(target);
    });
});