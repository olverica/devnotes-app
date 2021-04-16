
import {ParentNode, LeafNode} from '~/services/notefs/node'
import TreeContainer from '~/services/notefs/container'
import MoveAction from '~/services/notefs/query/actions/move'

describe('Append action', () => {

    let container: TreeContainer;
    let moving: MoveAction;

    let target: ParentNode;
    let parent: ParentNode
    let root: ParentNode;

    let child: LeafNode;
    let leaf: LeafNode;

    beforeEach(() => {
        child = {id: 4, parent: 3}

        target = {id: 3, parent: 1, children: []};
        leaf = {id: 2, parent: 0};

        parent = {id: 1, parent: 0, children: [target, leaf]}
        root = {id: 0, children: [ parent, ]};

        container = new TreeContainer(root);
    });

    test('proceed should move node to parent children', () => {
        let to = root.id;

        moving = new MoveAction(container, target.id, to);
        moving.proceed();

        let targetIndexAtRoot = 
            root.children.indexOf(target);

        expect(targetIndexAtRoot).not.toBe(-1);
    });

    test('proceed should set parrent to node', () => {
        let to = root.id;

        moving = new MoveAction(container, target.id, to);
        moving.proceed();

        expect(target.parent).toBe(root.id);
    });

    test('proceed should fail if node moves to it children', () => {
        let to = child.id;
        
        moving = new MoveAction(container, target.id, to);
        let callback = () =>
            moving.proceed();

        expect(callback).toThrow();
    });

    test('proceed should fail if it node moves to leaf node', () => {
        let to = leaf.id;

        moving = new MoveAction(container, target.id, to);
        let callback = () =>
            moving.proceed();

        expect(callback).toThrow();
    });
});