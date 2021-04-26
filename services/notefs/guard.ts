import TreeNode from '~/services/notefs/node'

interface CheckTarget {
    id: unknown;
    type: unknown;
    children: unknown;
}

export default class NodeGuard {

    check(node: object): node is TreeNode {
        let target = node as CheckTarget;

        return this.validateId(target) &&
               this.validateChildren(target);
    }

    private validateId(node: CheckTarget) {
        let id: unknown = node['id'];

        if (typeof id === 'string' || typeof id === 'number')
            return true;

        return false;
    }

    private validateChildren(node: CheckTarget) {
        let children: unknown = node['children'];

        if (children === undefined || Array.isArray(children))
            return true;

        return false;
    }
}