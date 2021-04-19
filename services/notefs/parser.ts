
import TreeContainer from '~/services/notefs/container'
import TreeNode from '~/services/notefs/node'


export default class Parser {

    public generate(node: object): TreeContainer {
        
        let root = this.traverse(node);
        let container = new TreeContainer(root);

        return container;
    }

    private traverse(target: object): TreeNode {
        if (!!!this.isNode(target))
            throw Error('Inccorect object type');

        if (target.children) {
            for (let node of target.children)
                this.traverse(node);
        }

        return target;
    }

    private isNode(target: object): target is TreeNode {
        return this.validateChildren(target) 
            && this.validateId(target);
    }

    private validateChildren(target: object): boolean {
        if (!!!target.hasOwnProperty('children'))
            return true;
        
        let property = (target as any).children;
        let isCorrect = Array.isArray(property);

        return isCorrect;        
    }

    private validateId(target: object): boolean {
        if (!!!target.hasOwnProperty('id'))
            return false;
        
        let property = (target as any).id
        let isCorrect = this.isKey(property);

        return isCorrect;
    }

    private isKey(property: any): property is string|number {
        let isCorrect = 
            typeof property === 'string' || 
            typeof property === 'number';

        return isCorrect;
    }
}