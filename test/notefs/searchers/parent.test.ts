import ParentTreeSeacher from '~/services/notefs/searchers/parent'
import TreeNode from '~/services/notefs/node'

describe('Parent searcher', () => {
    
    let root: TreeNode;
    let target: TreeNode;


    beforeEach(() => {
        target = { id: 123 };
        root = { id: 0, children: [target] }
    });

    test('find should return correct parent node', () => {

        let searcher = new ParentTreeSeacher(root);
        let founded = searcher.find(target.id);

        expect(founded).toEqual(root);
    });
});