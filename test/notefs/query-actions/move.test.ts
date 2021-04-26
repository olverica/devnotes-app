import MoveAction from '~/services/notefs/query/actions/move'
import {ParentNode, LeafNode} from '~/services/notefs/node'


describe('Append action', () => {

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
    });

    test('proceed should move node to parent children', () => {
        let to = root.id;

        moving = new MoveAction(root, target.id, to);
        moving.proceed();

        let indexAtRoot = 
            root.children.indexOf(target);

        expect(indexAtRoot).not.toBe(-1);
    });

    test('proceed should detach node from previous parent', () => {
        let to = root.id;

        moving = new MoveAction(root, target.id, to);
        moving.proceed();

        let indexAtParent = 
            parent.children.indexOf(target);

        expect(indexAtParent).toBe(-1);
    });
    
    test('proceed should fail if node moves to it children', () => {
        let to = child.id;
        
        moving = new MoveAction(root, target.id, to);
        let callback = () =>
            moving.proceed();

        expect(callback).toThrow();
    });

    test('proceed should fail if it node moves to leaf node', () => {
        let to = leaf.id;

        moving = new MoveAction(root, target.id, to);
        let callback = () =>
            moving.proceed();

        expect(callback).toThrow();
    });
});